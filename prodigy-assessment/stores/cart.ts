import { createSlice } from "@reduxjs/toolkit";
import { InsuranceItem } from "../models/product";

export const cartReducer = createSlice({
    name: 'Cart',
    initialState: {
        items: [] as InsuranceItem[],
    },
    reducers: {
        addToCart: (state, action) => {
            if (!state.items.find((item) => { return item.id === action.payload.id })) {
                state.items.push(action.payload as InsuranceItem);
            }
        },
        removeFromCart: (state, action) => {
            const data = state.items.filter((item) => {
                return item.id !== action.payload.id;
            });
            state.items = data;
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
