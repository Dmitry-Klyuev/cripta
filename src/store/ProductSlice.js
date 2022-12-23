import {createSlice} from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [
            {
                id: 1,
                name: "test4",
                description: "test description",
                life_time: 365,
                minimal_amount: "10000.00000000",
                currency_id: 3,
                check_period: 7,
                percent_when_check: 0.4,
                expected_percent: 40,
                type_trade: 1,
                coupon_barrier_percent: 50,
                closing_barrier_percent: 50,
                memory_effect: 0,
                hot_at: null,
                active: 1,
                created_at: "2022-11-22T08:28:15.000000Z",
                updated_at: "2022-12-22T08:28:15.000000Z",
                status: 'В работе',
            },
            {
                id: 2,
                name: "test1",
                description: "test description",
                life_time: 365,
                minimal_amount: "10000.00000000",
                currency_id: 3,
                check_period: 14,
                percent_when_check: 1.5,
                expected_percent: 40,
                type_trade: 1,
                coupon_barrier_percent: 40,
                closing_barrier_percent: 40,
                memory_effect: 0,
                hot_at: null,
                active: 1,
                created_at: "2022-10-22T08:28:15.000000Z",
                updated_at: "2022-12-22T08:28:15.000000Z",
                status: 'В работе',
            },
            {
                id: 3,
                name: "test2",
                description: "test description",
                life_time: 30,
                minimal_amount: "10000.00000000",
                currency_id: 3,
                check_period: 30,
                percent_when_check: 30,
                expected_percent: 40,
                type_trade: 1,
                coupon_barrier_percent: 100,
                closing_barrier_percent: 100,
                memory_effect: 0,
                hot_at: null,
                active: 1,
                created_at: "2022-12-22T08:28:15.000000Z",
                updated_at: "2022-12-22T08:28:15.000000Z",
                status: 'В работе',
            }
        ],
    },
    reducers:{
        setProducts(state, action){

        }
    }
})

export const {setProducts} = ProductSlice.actions
export default ProductSlice.reducer
