import { BOOKTICKETS,TOTALTICKETS,CANCELTICKET } from "./actions"

    const initialState={
        BOOKTICKETS:10,
        TOTALTICKETS:50,
        CANCELTICKET:0
    }

    export const ReducerFunction=(state=initialState,action)=>
    {
        switch(action.type)
        {
            case BOOKTICKETS:
                return({...state,BOOKTICKETS:state.BOOKTICKETS+1,TOTALTICKETS:state.TOTALTICKETS+1})

                default:
                    state
                
        }
       

    }
