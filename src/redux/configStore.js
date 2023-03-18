import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import authSlice from './Auth/authSlice';
//import motorcycleReducer from './Auth/homeSlice';
import itemsReducer from './addItem/addItemSlice';

// root Reducer
const rootReducer = combineReducers({
  // Add reducer here
  auth: authSlice,
 items: itemsReducer,

});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);


export default store;
