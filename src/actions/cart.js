import * as types from './index';

export const addItemToCartAction = (item) => {
    return {
        type: types.ADD_TO_CART,
        item
    }
};

export const removeItemFromCartAction = (index) => {
    return {
        type: types.REMOVE_FROM_CART,
        index
    }
};

export const openCartAction = () => {
    return {
        type: types.OPEN_CART
    }
};

export const closeCartAction = () => {
    return {
        type: types.CLOSE_CART
    }
};