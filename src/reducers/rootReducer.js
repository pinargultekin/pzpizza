import { combineReducers } from 'redux';
import promoCodeReducer from './PromoCodeReducer';
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  promoCode: promoCodeReducer,
  cartItem: cartReducer
});

export default rootReducer;


