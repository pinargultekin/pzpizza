import { combineReducers } from 'redux';
import promoCodeReducer from './PromoCodeReducer';

export default combineReducers({
  promoCode: promoCodeReducer
});
