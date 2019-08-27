import * as types from '../actions';

export default function (state = {
  cartItems: [],
  cartIsOpen: false
}, action) {
  const response = action.response;
  switch (action.type) {
    case types.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.item] };
    case types.REMOVE_FROM_CART:
      return { ...state, cartItems: [...state.cartItems.slice(0, action.index), ...state.cartItems.slice(action.index + 1)] };
    case types.OPEN_CART:
      return { ...state, cartIsOpen: true }
    case types.CLOSE_CART:
      return { ...state, cartIsOpen: false }
    case types.ADD_TO_CART_SUCCESS:
      return { ...state, response: { cartItems: [...state.cartItems, action.items] } };
    case types.ADD_TO_CART_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};