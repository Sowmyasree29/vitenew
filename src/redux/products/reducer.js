import { FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,FETCH_DATA_REQUESTS } from "../tickets/actiontypes"



const initialState={
    products:[],
    error:"",
    loading:true
}



export const productReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case FETCH_DATA_REQUESTS:
            return {...state,loading:true,}

        case FETCH_DATA_SUCCESS:
            return {...state,products:action.payload,loading:false}
        
            case FETCH_DATA_FAILURE:
                return{...state,loading:false,error:"something went wrong"}

        default :
        return state;
    }

}
