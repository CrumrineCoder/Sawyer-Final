import { combineReducers } from 'redux';
import menu from './menuReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    menu, cart
});

export default rootReducer;