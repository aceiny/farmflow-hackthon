import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = 'https://hack.baroud1.repl.co/crud/products/';

// Fetch all products
export const getProducts = createAsyncThunk('products/getproducts', async () => {
    const response = await axios.get(api);
    return response.data;
});

// Fetch a single product by ID
export const getProductById = createAsyncThunk('products/getproductbyid', async (productId) => {
    const response = await axios.get(api + productId);
    return response.data;
});

const initialState = {
    loading: false,
    data: [],
    product: {},
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getProductById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
