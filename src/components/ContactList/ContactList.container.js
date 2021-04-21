import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations'
import ContactList from './ContactList'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

// const getVisibleContacs = (allContacts, filter) => {

//     const normalizeSearch = filter.toLowerCase();

//     return allContacts.filter(({name}) =>
//       name.toLowerCase().includes(normalizeSearch),
//     );
//   };


const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacs(state),
});
  

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)