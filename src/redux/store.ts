/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";

/* Instruments */
import { reducer } from "./rootReducer";

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
