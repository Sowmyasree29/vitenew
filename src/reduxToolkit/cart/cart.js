import { createSlice } from "@reduxjs/toolkit";




const cart=createSlice(
    {
        name:"cart",
        initialState:{
            carts:[],

        },
        reducers:{
            addToCart:(state,action)=>
            {
                return {...state,carts:[...state.carts,action.payload]}
            },
            removeAllFromCart:(state)=>
            {
                return {...state,carts:[]}
            },
            removeItemFromCart:(state,action)=>
            {
                return {...state,carts:action.payload}
            }
        },

    }
)
export const {addToCart,removeAllFromCart,removeItemFromCart}=cart.actions
export default cart.reducer