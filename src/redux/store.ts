import {configureStore, combineReducers} from '@reduxjs/toolkit';
import toggleReducer from './toggle/reducer';

const rootReducer = combineReducers({toggle: toggleReducer});

export const store = configureStore({
  reducer: rootReducer,
});
