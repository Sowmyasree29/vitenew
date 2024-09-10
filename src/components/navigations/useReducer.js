export const initialState={
    count:0,
};
const INCREMENT_AGE="INCREMENT_AGE"
const DECREMENT_AGE="DECREMENT_AGE"
const RESET_AGE="RESET_AGE"

export const ReducerFunction=(state,action)=>
{
    switch(action.type)
    {
        case INCREMENT_AGE:
            return {...state,count:state.count+1}

            case DECREMENT_AGE:
                return {...state,count:state.count-1}

                case RESET_AGE:
                    return {...state,count:0}

                    default:
                        return state;
    }

}