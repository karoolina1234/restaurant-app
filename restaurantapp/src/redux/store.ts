import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./reducer";
import cartReducer from "./reducerCart";
const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
