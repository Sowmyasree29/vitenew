import { CHANGE_USERNAME } from "../tickets/actiontypes"
import { INCREMENT_SALARY } from "../tickets/actiontypes"
import { changeusername } from "./action"
import { increment } from "./action"



const initialState={
    name:"sowmya",
    salary:1000,
 
 }
 
 export const profileReducer=(state=initialState,action)=>
 {
     switch(action.type)
     {
         case CHANGE_USERNAME:
             return {...state,name:action.payload}

             case INCREMENT_SALARY:
                return {...state,salary:state.salary+action.payload}

                default :
                 return state
     }
 }