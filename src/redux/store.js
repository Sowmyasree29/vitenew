import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Reducer } from "./tickets/reducer";
import { rootReducers } from "./combineReducers";
import { thunk } from "redux-thunk";




export const reduxStore=createStore(rootReducers,applyMiddleware(thunk))