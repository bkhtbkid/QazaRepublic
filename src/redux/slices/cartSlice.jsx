import { createSlice } from "@reduxjs/toolkit";

const item = JSON.parse(localStorage.getItem("cart"));
const total = (item) => {
    if (item) {
        const totalPrice = item.reduce((sum, obj) => {
            return obj[0].price + sum;
        }, 0);
        return totalPrice;
    }
};

const initialState = {
    totalPrice: total(item),
    orders: item || [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.orders.push(action.payload);
            state.totalPrice = state.orders.reduce((sum, obj) => {
                return obj[0].price + sum;
            }, 0);
        },
        clearItems(state) {
            state.orders = [];
            state.totalPrice = 0;
        },
        removeItems(state, action) {
            state.orders = state.orders.filter((obj) => {
                return obj[0].id !== action.payload;
            });
            state.totalPrice = state.orders.reduce((sum, obj) => {
                return sum + obj[0].price;
            }, 0);
        },
    },
});

export const { addItem, clearItems, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
