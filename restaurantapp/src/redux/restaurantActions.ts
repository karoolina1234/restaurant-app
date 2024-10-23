import { Menu, Restaurant } from "./types";

export const SET_RESTAURANT = "SET_RESTAURANT";
export const SET_MENU = "SET_MENU";

export interface SetRestaurantAction {
  type: typeof SET_RESTAURANT;
  payload: Restaurant;
}

export interface SetMenuAction {
  type: typeof SET_MENU;
  payload: Menu;
}

export type RestaurantActionTypes = SetRestaurantAction | SetMenuAction;

export const setRestaurant = (restaurant: Restaurant): SetRestaurantAction => ({
  type: SET_RESTAURANT,
  payload: restaurant,
});

export const setMenu = (menu: Menu): SetMenuAction => ({
  type: SET_MENU,
  payload: menu,
});
