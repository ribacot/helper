import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
