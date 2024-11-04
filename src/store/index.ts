import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>

const dispatch = useDispatch();
const logger = useSelector(state: RootState => state.logger);



store.getState()

export default store;