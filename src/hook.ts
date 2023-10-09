import {ReduxDispatch, ReduxState} from "./redux/store";
import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
} from 'react-redux';

export const useAppDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
