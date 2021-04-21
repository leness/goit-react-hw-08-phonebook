import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    addContactRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactRequest,
    deleteContactsSuccess,
    deleteContactsError,
    changeFilter,
    fetchContactRequest,
    fetchContactsSuccess,
    fetchContactsError
} from './contacts-actions'


const contacts = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactsSuccess]: (state, {payload}) => [...state, payload],
    [deleteContactsSuccess]: (state, {payload}) =>
        state.filter(({ id }) => id !== payload),
})


const filter = createReducer('', {
    [changeFilter]: (_, {payload})=>payload,
})


const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactsSuccess]: () => false,
    [addContactsError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactsSuccess]: () => false,
    [deleteContactsError]: () => false
})


export default combineReducers({
    contacts,
    filter,
    loading,
})
