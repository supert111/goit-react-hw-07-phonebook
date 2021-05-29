import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');
//const deleteContact = createAction('contact/Delete');


export const searchByFilter = createAction('contact/SearchByFilter');


///////////////////////////////////////////////////////////
//redux

// import types from './contactForm-types';
// import shortid from 'shortid';

// const addContact = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//         name,
//         number, 
//         id: shortid.generate(),
//     }
// });

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// })

// const searchByFilter = (value) => ({
//     type: types.SEARCH_BY_FILTER,
//     payload: value,
// })

// export default { addContact, deleteContact, searchByFilter };
