import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts:
    JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("cart")
    ) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts.push(action.payload);
      window.localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    removeProduct: (state, action) => {
      const index = state.cartProducts.indexOf(action.payload);
      if (index !== -1) {
        state.cartProducts.splice(index, 1);
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    clearCart: (state, action) => {
      state.cartProducts = [];
      window.localStorage.setItem("cart", null);
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
