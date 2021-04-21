import axios from 'axios';
import {
    addContactRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactRequest,
    deleteContactsSuccess,
    deleteContactsError,
    fetchContactRequest,
    fetchContactsSuccess,
    fetchContactsError
} from './contacts-actions'

// axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());

   axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch (error => dispatch(fetchContactsError(error.message)));  
}

const addContacts = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };
    console.log(contact);
    dispatch(addContactRequest());

    axios
        .post('./contacts', contact)
        .then(({ data }) =>
            dispatch(addContactsSuccess(data)),
        )
        .catch(error => dispatch(addContactsError(error.message)));
}

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`./contacts/${contactId}`)
        .then(() => dispatch(deleteContactsSuccess(contactId)))
        .catch(error => dispatch(deleteContactsError(error.message)));
}

export default {
    fetchContacts,
    addContacts,
    deleteContact
}