import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64fd4b66596493f7af7e27d6.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return console.log(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    try {
      const response = await axios.post('/contacts', JSON.stringify(contact));
      return response.data;
    } catch (error) {
      return console.log(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
