import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
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
    //deleteContact,
    searchByFilter
} from '../contacts/contacts-actions';

const contacts = createReducer([  
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
], {[fetchContactSuccess]:(_, {payload}) => payload, 
    [addContactSuccess]: (state, { payload }) => {
        const duplicateName = state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase());
        
        if(duplicateName) {
            alert(`${payload.name} is already in contacts.`);
            return state;
        }

        if(payload.name === "") {
            alert(`Please fill out the form it is empty.`);
            return state;
        }

        if(payload.number === "") {
            alert(`Please fill out the form with your phone number, it is empty.`);
            return state;
        }

        return [payload, ...state,];
    },
    [deleteContactSuccess]: (state, { payload }) => (state.filter(({id}) => id !== payload)),
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [searchByFilter]: (_, { payload }) => payload,
})

export default combineReducers({
    contacts,
    filter,
    loading,
})