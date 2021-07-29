import { cartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
