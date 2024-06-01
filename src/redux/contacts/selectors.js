import { createSelector } from "@reduxjs/toolkit";
import { selectTextFilter } from "../filters/selectors";


export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, textFilter) => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);