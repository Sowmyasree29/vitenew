import { BOOKTICKETS } from "./actiontypes"
import { CANCELTICKETS } from "./actiontypes";




export const actions=(qty)=>
{
 return{
    type:BOOKTICKETS,
    payload:qty
 } ;
}

export const cancel=()=>
{
    return{
        type:CANCELTICKETS

    }
}