import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      state.items.push(item);
      state.totalAmount += item.price * item.quantity;
    },
    increaseItemQuantity(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.items[itemIndex].quantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          state.items[itemIndex].quantity -= 1;
          state.totalAmount -= item.price;
        } else {
          state.totalAmount -= item.price;
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addItemToCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
