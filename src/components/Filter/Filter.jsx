import { connect } from 'react-redux'
import s from './Filter.module.css'
import * as contactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label className={s.filter} >
              <p className={s.filterTitle}>Find contacts by name</p>  
        <input type="text" value={value} onChange={onChange} className={s.filterInput} />
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



    