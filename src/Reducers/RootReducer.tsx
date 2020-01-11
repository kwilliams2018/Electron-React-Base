import { combineReducers } from "redux";

import AppReducer from './AppReducer';

export const RootReducer = combineReducers({
    app: AppReducer
})

export type RootState = ReturnType<typeof RootReducer>