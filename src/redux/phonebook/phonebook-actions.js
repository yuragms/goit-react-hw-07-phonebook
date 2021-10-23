// import {ADD, DELETE, CHANGE_FILTER} from './phonebook-types';
import { v4 as uuidv4 } from "uuid";
import { createAction } from '@reduxjs/toolkit';


const addContacts = createAction('contacts/add', (name, number) => {
    return {
        payload: {
            id: uuidv4(),
            name,
            number,
            },
    };
});

// const addContacts =(name, number) => ({
//     type: ADD,
//     payload: {
//     id: uuidv4(),
//     name,
//     number,
//     },
// });


const delContact = createAction('contacts/delete');

// const delContact = (contactId) => ({
//     type: DELETE,
//     payload: contactId,
// });

const changeFilter = createAction('contacts/changeFilter');

// const changeFilter = (value) => ({
//     type: CHANGE_FILTER,
//     payload: value,
// });

export  { addContacts, delContact, changeFilter};