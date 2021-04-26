import { Component, Suspense, lazy } from "react";
import { Switch } from "react-router";
import { connect } from 'react-redux';
import Container from './components/Container/Container'
import AppBar from './components/AppBar'
import {authOperations} from './redux/auth'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'



const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));


 class App extends Component {
   
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

   render() {
     return (
       
       <Container>
         <AppBar />
 
         <Suspense fallback={<p>Загружаем...</p>}>
           <Switch>
           <PublicRoute exact path="/" component={HomeView} />
           <PublicRoute
             path="/register"
             restricted
             redirectTo="/contacts"
             component={RegisterView}
           />
           <PublicRoute
             path="/login"
             restricted
            //  redirectTo="/login"
               redirectTo="/contacts"
             component={LoginView}
           />
           <PrivateRoute
             path="/contacts"
             component={ContactsView}
             redirectTo="/contacts"
           />
         </Switch>
         </Suspense>

         
       </Container>
     )
   }
 }

  

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)

