import {createReducer} from '@reduxjs/toolkit';

import {disableToggleAction, enableToggleAction} from './actions';

const initialState = {
  toggleValue: false,
};

export default createReducer(initialState, builder => {
  builder
    .addCase(enableToggleAction, state => ({...state, toggleValue: true}))
    .addCase(disableToggleAction, state => ({...state, toggleValue: false}));
});
