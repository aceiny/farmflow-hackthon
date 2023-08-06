import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    authtype : 'login'
}
const authtypeSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        typelogin : (state) => {
            state.authtype = "login"
        },
        typesignup : (state) => {
            state.authtype = "signup"
        },
        typesignupnext : (state) => {
            state.authtype = "next"
        },
    },

})
export const {typelogin,typesignup} = authtypeSlice.actions
export default authtypeSlice.reducer