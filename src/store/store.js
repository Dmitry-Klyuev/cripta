import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductSlice";


export const store = configureStore({
    reducer:{
        user: UserSlice,
        products: ProductSlice,
    }
})