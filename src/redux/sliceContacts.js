import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './thunk';
import { initialState } from './initialState';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledFetch = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.items.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.items = state.items.filter(
    item => item.id !== action.payload.id
  );
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState:initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        handleFulfilled
      );
  },
});
export const contactReducer=contactsSlice.reducer
