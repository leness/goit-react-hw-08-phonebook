import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { Button } from 'react-bootstrap';
 
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
        {contacts.map(({id, name, number}) => (
            
                  <li key={id} className={s.list}>
            <p>{name}: {number}</p>
            {/* <button className={s.button} onClick={() => onDeleteContact(id)}>Delete</button> */}
            <Button className={s.button} onClick={() => onDeleteContact(id)} variant="danger">Delete</Button>
           </li>  
        )  
          )}
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList
