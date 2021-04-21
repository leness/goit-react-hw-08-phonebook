import { connect } from 'react-redux'
import AuthNav from './AuthNav'
import UserMenu from './UserMenu/UserMenu'
import Navigation from './Navigation'
import {authSelectors} from '../redux/auth'


const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    }
}

const AppBar = ({isAuthenticated}) => (
    <header style={styles.header} >
        <Navigation />
        {/* <AuthNav /> */}
        {isAuthenticated ? <UserMenu/> : <AuthNav />}
    </header>
)

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar)
