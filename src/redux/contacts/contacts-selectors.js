// import { createSelector } from '@reduxjs/toolkit';

// export const getIsLoading = state => state.loading;
// export const getFilter = state => state.filter;
// export const getAllContacts = state> state.contacts;

// //memoization
// export const searchFilter = createSelector(
//     [getAllContacts, getFilter],
//     (contacts, filter) => {
//         const caseInsensitive = filter.toLowerCase();

//         return contacts.filter(contact => 
//             contact.name.toLowerCase().includes(caseInsensitive)
//         );
//     }
// );


///////////////////////////////////////////////////
// export const searchFilter = state => {
//     const contacts = getAllContacts(state);
//     const filter = getFilter(state);
//     const caseInsensitive = filter.toLowerCase();

//     return contacts.filter(contact => 
//         contact.name.toLowerCase() === caseInsensitive)
// }