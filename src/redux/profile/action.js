import { CHANGE_USERNAME } from "../tickets/actiontypes"
import { INCREMENT_SALARY } from "../tickets/actiontypes"


export const changeusername=(customname)=>
{
    return {
        type:CHANGE_USERNAME,
        payload:customname
    }
    
}
export const increment=(qty)=>
{
    return{
        type:INCREMENT_SALARY,
        payload:qty
    }
}