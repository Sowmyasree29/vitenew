import { BOOKTICKETS } from "./actiontypes"
import { CANCELTICKETS } from "./actiontypes"



const initialState={
   TotalTickets:200,
   BookedTickets:20,
   cancelTickets:0
    

}

export const Reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case BOOKTICKETS:
            return {...state,BookedTickets:state.BookedTickets+action.payload}

            case CANCELTICKETS:
                return {...state,cancelTickets:state.cancelTickets+1,BookedTickets:state.BookedTickets-1}

            default:
                return state
    }
}