import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], 
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProdutcts(state, action) {
            state.products = action.payload
        }

    },
})

export const {setProdutcts} = productSlice.actions;
export default productSlice.reducer


