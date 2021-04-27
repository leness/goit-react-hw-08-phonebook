import { Component } from "react";
import { connect } from "react-redux";
import shortid from 'shortid';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactSelectors from '../../redux/contacts/contacts-selectors'
import s from './ContactForm.module.css'
import { Button } from 'react-bootstrap';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
    }
    
    
    handleSubmit = e => {
        const { name, number } = this.state;
        const { contacts } = this.props;
        e.preventDefault();
        
        if (contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts.`);
            return { name: '', number: '' };
        }

        this.props.onSubmit(name, number);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }
    
    render() {
        return (
            <>
            <form className={s.formContact} onSubmit={this.handleSubmit}>
                    <label htmlFor={ this.nameInputId} className={s.formLabel} >Name
           <input
                            type='text'
                            name='name'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            className={s.formInput}
                            id={this.nameInputId}
                            value={this.state.name}
                            onChange={this.handleChange} />
          </label>
          <label htmlFor={ this.numberInputId} className={s.formLabel} >Number
           <input
                            type='number'
                            name='number'
                            required
                            className={s.formInput}
                            id={this.numberInputId}
                            value={this.state.number}
                            onChange={this.handleChange} />
          </label>
                    {/* <button type='submit' className={s.button}>Add contact</button> */}
                    <Button type='submit' variant="primary">Add contact</Button>
                    
        </form>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: contactSelectors.getAllContacts(state),
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsOperations.addContacts(name, number))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
