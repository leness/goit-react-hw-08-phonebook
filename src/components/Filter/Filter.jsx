import { connect } from 'react-redux'
import styles from './Filter.module.css'
import * as contactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.label}>
            <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}/>
    </label >
        </div>
        
    )
}



const mapStateToProps = state => ({
    value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)



    