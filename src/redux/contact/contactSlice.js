import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './contactInitialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: (state, { payload }) => {
      state.contacts.push(payload);
    },
    removeContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContactAction, removeContactAction } = contactsSlice.actions;
