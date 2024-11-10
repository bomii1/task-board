import React, { FC, useState, useRef } from 'react'
import { useTypedSelector } from '../../hooks/redux'
import { FiPlusCircle } from 'react-icons/fi'
import SideForm from './SideForm/SideForm'
import { addButton, addSection, boardItemActive, container, title, boardItem } from './BoardList.css'
import clsx from 'clsx'


type TBoardListProps = {
  activeBoardId: string,
  setActiveBoardId: 
  React.Dispatch<React.SetStateAction<string>>
}

const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId
}) => {

  const { boardArray } = useTypedSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false); // 게시판 등록 폼
  // const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    // setTimeout(() => {
    //   inputRef.current?.focus();
    // }, 0);
  }

  return (
    <div className={container}>
      <div className={title}>
        게시판
      </div>
      {boardArray.map((board,index) => 
        <div key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={
            clsx(
              {
                [boardItemActive]: 
                  boardArray.findIndex(b => b.boardId === activeBoardId) === index,
              },
              {
                [boardItem]: 
                  boardArray.findIndex(b => b.boardId === activeBoardId) !== index
              }
            )
          }
        >
          <div >
            {board.boardName}
          </div>
        </div>
      )}
      <div className={addSection}>
        {
          isFormOpen ? 
            <SideForm 
              setIsFormOpen={setIsFormOpen}
              isFormOpen={isFormOpen}
            />
            :
            <FiPlusCircle className={addButton} onClick={handleClick}/>
        }
      </div>
    </div>
  )
}

export default BoardList
