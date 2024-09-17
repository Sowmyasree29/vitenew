import { legacy_createStore as createStore } from "redux";
import { Reducer } from "./tickets/reducer";




export const reduxStore=createStore(Reducer)