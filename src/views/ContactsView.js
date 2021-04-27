import { Component } from "react";
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import contactsOperations from '../redux/contacts/contacts-operations'
import contactsSelectors from '../redux/contacts/contacts-selectors'



const styles = {
  app: {
    width: 500,
    margin: 'auto',
    textAlign: 'left',
    // backgroundColor: 'inherit',
  }
}

class ContactsView extends Component {
    componentDidMount() {
  this.props.fetchContacts();
}

  render() {
    return (
      <div style={styles.app}>
       
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2> 
    <Filter />
        <ContactList />
        
        {this.props.isLoadingContacts && <h1>Загружаем...</h1>}

  </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});
  
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView)