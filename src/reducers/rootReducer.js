import { combineReducers } from 'redux';
import promoCodeReducer from './PromoCodeReducer';
import cartReducer from "./cartReducer"
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  promoCode: promoCodeReducer,
  cartItem: cartReducer,
  firestore: firestoreReducer
});

export default rootReducer;


