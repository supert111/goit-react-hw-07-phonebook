import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

// const deleteContact = createAction('contact/Delete');
// const searchByFilter = createAction('contact/SearchByFilter');

export default { 
    addContactRequest, 
    addContactSuccess, 
    addContactError,
    // deleteContact, 
    // searchByFilter,
};

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
