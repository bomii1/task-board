import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

// 리덕스 스토어를 만들어야하는데 여기서 만들거임

const store = configureStore({ // 스토어 객체 생성
    reducer
})

// 스토어의 상태 타입 정의
export type RootState = ReturnType<typeof store.getState>

// 디스패치 타입 정의
export type AppDispatch = typeof store.dispatch;

export default store;