import {ReduxDispatch, ReduxState} from "./redux/store";
import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
} from 'react-redux';

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
