import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantState, Restaurant, Menu } from "./types";

const initialState: RestaurantState = {
  restaurant: null,
  menu: null,
  loading: false,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant(state, action: PayloadAction<Restaurant>) {
      state.restaurant = action.payload;
    },
    setMenu(state, action: PayloadAction<Menu>) {
      state.menu = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setRestaurant, setMenu, setLoading } = restaurantSlice.actions;

export default restaurantSlice.reducer;
