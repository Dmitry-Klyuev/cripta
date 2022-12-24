import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userAPI} from "../api/api";


export const LoginUser = createAsyncThunk(
    'user/LoginUser',
    async function (payload, {rejectWithValue, dispatch}) {
        try {
            dispatch(setStatus('loading'))
            const response = await userAPI.login(payload)
            debugger
            console.log(response.data)
            // if (response.data.status !== 1){
            //     throw new Error(response.data.error.text)
            // }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

export const logOutUser = createAsyncThunk(
    'user/LogOut',
    async function (_, {rejectWithValue, dispatch}) {
        try {
            const token = localStorage.getItem('token')
            dispatch(setStatus('loading'))
            const response = await userAPI.logOut(token)
            debugger
            if (response.data.status !== 1) {
                throw new Error(response.data.error.text)
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const RegistrationUser = createAsyncThunk(
    'user/registration',
    async function (payload, {rejectWithValue, dispatch}) {
        try {
            dispatch(setStatus('loading'))
            const response = await userAPI.registration(payload)
            if (response.status !== 200) {
                throw new Error(response.data.error.text)
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const authUser = createAsyncThunk(
    'user/LoginUser',
    async function (_, {rejectWithValue, dispatch}) {
        try {
            const token = localStorage.getItem('token')
            dispatch(setStatus('loading'))
            const response = await userAPI.authMe(token)
            debugger
            console.log(response.data)
            if (response.status !== 200) {
                throw new Error(response.data.error.text)
            }
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)


const UserSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
            id: '',
            name: '',
            email: "",
            token: '',
            accounts: {
                user_id: '',
                currency_id: '',
                amount: '',
                currency_ticker: "",
            }

        },
        status: null,
        error: null,
        isAuth: false,

    },
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: {
        [LoginUser.fulfilled]: (state, action) => {
            debugger
            state.data = action.payload.data
            state.status = 'null'
            state.isAuth = true
            localStorage.setItem('token', action.payload.data.token)
        },
        [LoginUser.rejected]: (state, action) => {
            state.status = 'null'
            state.error = action.payload
        },

        [logOutUser.fulfilled]: (state, action) => {
            debugger
            state.status = 'null'
            localStorage.removeItem('token')
            state.isAuth = false
            state.data = {}
        },
        [logOutUser.rejected]: (state, action) => {
            state.status = 'null'
            state.error = action.payload

        },

        [RegistrationUser.pending]: (state, action) => {

        },
        [RegistrationUser.fulfilled]: (state, action) => {
            state.status = 'null'
        },
        [RegistrationUser.rejected]: (state, action) => {
            state.status = 'null'

        },

        [authUser.fulfilled]: (state, action) => {
            debugger
            state.data = action.payload
            state.status = 'null'
            state.isAuth = true
        },
        [authUser.rejected]: (state, action) => {
            state.status = 'null'
            state.error = action.payload
        },
    }
})

export const {setStatus} = UserSlice.actions
export default UserSlice.reducer