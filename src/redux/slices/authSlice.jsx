/*import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apilogin = 'https://hack.baroud1.repl.co/login'; // Replace with your API endpoint
const apisignup = "https://hack.baroud1.repl.co/signup"

export const signupUser = createAsyncThunk('auth/signupUser', async (user) => {
    try {
        const response = await axios.post(apisignup, user);
        return response.data;
    } catch (error) {
        throw error;
    }
});
export const sendUser = createAsyncThunk('auth/senduser', async (user) => {
    const response = await axios.post(apilogin, user);
    return response;
});

const initialState = {
    loading: false,
    isLogged: false, // Set to false initially since the user is not logged in
    data: {},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /*.addCase(signupUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.isLogged = true; // Assuming the user is logged in after fetching data successfully
            })*/
            /*.addCase(sendUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                if (action.payload.status === 200) {
                    state.isLogged = true; // Set isLogged to true only when response status is 200
                } else {
                    state.isLogged = false; // Set isLogged to false if response status is not 200
                }
            });
    },
});

export default authSlice.reducer;*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apilogin = 'https://hack.baroud1.repl.co/crud/login'; // Replace with your API endpoint
const apisignup = 'https://hack.baroud1.repl.co/crud/signup';

export const sendUser = createAsyncThunk('auth/senduser', async (user) => {
    const response = await axios.post(apilogin, user);
    return response;
});

// Create a new async thunk for signing up the user
export const signupUser = createAsyncThunk('auth/signupUser', async (user) => {
    const response = await axios.post(apisignup, user);
    return response;
});

const initialState = {
    loading: false,
    isLogged: false, // Set to false initially since the user is not logged in
    data: {},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signout:(state) => {
            state.isLogged = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                if (action.payload.status === 200) {
                    state.isLogged = true; // Set isLogged to true only when response status is 200
                } else {
                    state.isLogged = false; // Set isLogged to false if response status is not 200
                }
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                if (action.payload.status === 200) {
                     // Set isLogged to true only when response status is 200
                } else {
                    state.isLogged = false; // Set isLogged to false if response status is not 200
                }
            });
    },
});
export const {signout} = authSlice.actions
export default authSlice.reducer;
