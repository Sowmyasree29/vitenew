import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchDataPromise=createAsyncThunk("fakestore/products",async()=>//exporting the action and in the down export the reducer
{
    const fetchData= await axios.get('https://fakestoreapi.com/products')
    return fetchData.data
})

const productSlice=createSlice(
    {
        name:"fakeproductsapi",
        initialState:{
            data:[],
            loading:true,
            error:""
        
        },
        extraReducers:(builder)=>
        {
         builder
         .addCase(fetchDataPromise.fulfilled,(state,action)=>
         {
            return {...state,data:action.payload,loading:false}

         })
         .addCase(fetchDataPromise.rejected,(state)=>
        {
            return{...state,loading:false,error:"something went wrong"}

        })
        .addCase(fetchDataPromise.pending,(state)=>
        {
            return{...state,loading:true}


        })
        

}
    
    }
)
export default productSlice.reducer