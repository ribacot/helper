import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlise = createSlice({
  name: 'filter',
  initialState:initialState,
  reducers: {
    chengeFilter: (state, action) => {
      return ({...state ,filter:action.payload.toLowerCase().trim()});
    },
  },
});
export const filterReducer = filterSlise.reducer;
export const { chengeFilter } = filterSlise.actions;
