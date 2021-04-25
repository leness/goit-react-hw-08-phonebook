import { connect } from "react-redux";
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png'
import { Button } from 'react-bootstrap';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({avatar, name, onLogout }) => (
    <div style={styles.container}>
        <img src={avatar} alt="" width="32" style={styles.avatar}/>
        <span style={styles.name}>Добро пожаловать, {name}</span>
    {/* <button type="button" onClick={onLogout}>Выйти</button> */}
    <Button type="button" onClick={onLogout} variant="outline-primary">Выйти</Button>
    </div>
)

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
})

const mapDispatchToProps = {
  onLogout: authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)