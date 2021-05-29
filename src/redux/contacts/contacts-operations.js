import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const addContact = (name, number) => dispatch => {
    const contact = {name, number};

    dispatch(actions.addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({data}) => 
        dispatch(actions.addContactSuccess(data)),
        )
        .catch(error => dispatch(actions.addContactError(error)))
}

const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(actions.deleteContactError(error)))
}

// const searchByFilter = createAction('contact/SearchByFilter');

export default { 
    addContact, 
    deleteContact, 
    // searchByFilter, 
};
