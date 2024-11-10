import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/redux'
import { FiX } from 'react-icons/fi'
import { header, modalWindow, wrapper, title, body, closeButton } from './LoggerModal.css'
import LogItem from './LogItem/LogItem'

type TLopperModalProps = {
  setIsLoggerOpen: 
  React.Dispatch<React.SetStateAction<boolean>>
}

const LoggerModal: FC<TLopperModalProps> = ({setIsLoggerOpen}) => {

  const logs = useTypedSelector(state => state.logger.logArray);

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>활동 기록</div>
          <FiX
            className={closeButton}
            onClick={() => setIsLoggerOpen(false)} />
        </div>
        <div className={body}>
          {logs.map((log) => 
            <LogItem key={log.logId} logItem={log}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoggerModal
