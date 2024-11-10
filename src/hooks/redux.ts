import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from '../store';

// 커스텀 훅
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();


// useDispatch, useSelector 를 타입스크립트에서 사용할 때는 커스텀 훅으로 만들어서 사용하는 것이 편함 -> 여기서 만들거임


// interface Obj<T> {
//     name: T;
// }

// interface State {
//     state: {
//         data: string,
//         loading: boolean
//     }
// }

// const obj: Obj<State> = {
//     name: {
//         state: {
//             data: 'abcd',
//             loading: false
//         }
//     }
// }