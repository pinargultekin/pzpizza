// Import createStore and applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
// Import thunk
import thunk from 'redux-thunk';
// Import root reducer
import rootReducer from './reducers/rootReducer';
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./fbConfig"





const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

export default store;
