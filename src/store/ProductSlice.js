import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productsApi} from "../api/api";
import {RegistrationUser} from "./UserSlice";

export const GetProducts = createAsyncThunk(
    'products/getProducts',
    async function(_, {rejectWithValue, dispatch}){
        try {
            const token = localStorage.getItem('token')
            const response = await productsApi.products(token)
            debugger
            console.log(response)
            return response.data
        }
        catch (e) {
            return rejectWithValue(e.message)

        }
    }
)


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    reducers:{
        setProducts(state, action){

        }
    },
    extraReducers:{
        [GetProducts.pending]: (state, action) => {

        },
        [GetProducts.fulfilled]: (state, action) =>{
            debugger
            state.status = 'null'
            state.data = action.payload.data
        },
        [GetProducts.rejected]: (state, action) => {
            state.status = 'null'

        },
    }
})

export const {setProducts} = ProductSlice.actions
export default ProductSlice.reducer
