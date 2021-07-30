import { cartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
