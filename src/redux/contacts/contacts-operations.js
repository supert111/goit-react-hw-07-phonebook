import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
};

export const addContact = ({name, number}) => async dispatch => {
    const contact = {name, number};
    
    dispatch(addContactRequest());
    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

export const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(deleteContactError(error))
    }
};

/////////////////////////////////////////////////////////////////////////
// import axios from 'axios';
// import {
//     fetchContactRequest,
//     fetchContactSuccess,
//     fetchContactError,
//     addContactSuccess,
//     addContactRequest,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
// } from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

// export const fetchContacts = () => dispatch => {
//     dispatch(fetchContactRequest());

//     axios
//         .get('/contacts')
//         .then(({data}) => dispatch(fetchContactSuccess(data)))
//         .catch(error => dispatch(fetchContactError(error)));
// };

// export const addContact = ({name, number}) => dispatch => {
//     const contact = {name, number};

//     dispatch(addContactRequest());

//     axios
//         .post('/contacts', contact)
//         .then(({data}) => dispatch(addContactSuccess(data)))
//         .catch(error => dispatch(addContactError(error)));
// }

// export const deleteContact = contactId => dispatch => {
//     dispatch(deleteContactRequest());

//     axios
//         .delete(`/contacts/${contactId}`)
//         .then(() => dispatch(deleteContactSuccess(contactId)))
//         .catch(error => dispatch(deleteContactError(error)));
// };