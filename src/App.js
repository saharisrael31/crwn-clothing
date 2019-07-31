import React from 'react';
import  HomePage  from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import {connect} from 'react-redux';
import { setCurretnUser } from './redux/user/user.actions.js';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurretnUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurretnUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurretnUser(userAuth);
      
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurretnUser: user => dispatch(setCurretnUser(user))
});

export default connect(null, mapDispatchToProps)(App);
