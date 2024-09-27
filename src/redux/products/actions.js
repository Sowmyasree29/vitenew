import { FETCH_DATA_FAILURE, FETCH_DATA_REQUESTS, FETCH_DATA_SUCCESS } from "../tickets/actiontypes"
import axios  from "axios"


export const fetchProductsData=()=>
    {
        return async(dispatch)=>
        {
            try{
                dispatch({type:FETCH_DATA_REQUESTS})
                const response=await axios.get('https://restcountries.com/v3.1/all')
                if(response.status===200)
                {
                    dispatch(
                        {
                            type:FETCH_DATA_SUCCESS,
                            payload:response.data
                        }
                    )
                }
            }
            catch(err)
            {
                dispatch(
                    {
                        type:FETCH_DATA_FAILURE,
                        
                    }
                )
            }
         

        }
    } 