import { combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { Reducer } from "./tickets/reducer";
import { productReducer } from "./products/reducer";



export const rootReducers=combineReducers({
    profile:profileReducer,
    ticket:Reducer,
    product:productReducer
})