// import { createAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { response } from 'express';
// import shortid from 'shortid';

// axios.defaults.baseURL = 'http://localhost:3000';

// const addContact = (name, number) => dispatch => {
//     const contact = {name, number};

//     dispatch({ type: 'contacts/addContactRequest'});

//     axios
//         .post('/contacts', contact)
//         .then(({data}) => 
//         dispatch({type: 'contacts/addContactSuccess', payload: data}),
//         )
//         .catch(error => dispatch({type: 'contacts/addContactError', payload: error}))
// }

// const addContact = createAction('contact/Add', ({name, number}) => ({
//     payload: {
//         name,
//         number, 
//         id: shortid.generate(),
//     }
// }));
// const deleteContact = createAction('contact/Delete');
// const searchByFilter = createAction('contact/SearchByFilter');

// export default { addContact, deleteContact, searchByFilter };

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
