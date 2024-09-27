import { configureStore } from "@reduxjs/toolkit";
import toyReducer from "./toys/toySlice"
import cartReducer from "./cart/cart"
import productReducer from "./products/productsSlice"






export const reduxStore=configureStore({
    reducer:{
        toyData:toyReducer,
        cartData:cartReducer,
        productData:productReducer,
        
    }
})