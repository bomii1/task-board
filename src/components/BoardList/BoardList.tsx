import React, { FC, useState } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import SideForm from './SideForm/SideForm'
import { addButton, addSection, boardItemActive, container, title, boardItem } from './BoardList.css'
import clsx from 'clsx'
import { GoSignOut } from 'react-icons/go'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../../firebase'
import { removeUser, setUser } from '../../store/slices/userSlice'
import { useAuth } from '../../hooks/useAuth'

type TBoardListProps = {
  activeBoardId: string,
  setActiveBoardId: 
  React.Dispatch<React.SetStateAction<string>>
}

const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId
}) => {

  const dispatch = useTypedDispatch();

  const { boardArray } = useTypedSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false); // 게시판 등록 폼
  // const inputRef = useRef<HTMLInputElement>(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider;

  const { isAuth } = useAuth();


  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    // setTimeout(() => {
    //   inputRef.current?.focus();
    // }, 0);
  }

  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then(userCredential => {
      console.log(userCredential);

      // 성공시 리덕스 스토어에 저장
      dispatch(
        setUser({
          email: userCredential.user.email,
          id: userCredential.user.uid
        })
      );
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      dispatch(
        removeUser()
      );
    })
    .catch((err) => {
      console.log(err);
    })
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
        {
          isAuth ? 
          <GoSignOut className={addButton} onClick={handleLogout} />
          : 
          <FiLogIn className={addButton} onClick={handleLogin} />
        }
      </div>
    </div>
  )
}

export default BoardList
