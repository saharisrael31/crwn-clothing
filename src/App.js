import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import  HomePage  from './pages/homepage/homepage.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurretnUser } from './redux/user/user.actions.js';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';


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
        <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/' />):(<SignInAndSignUp />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
    );
  }
}

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurretnUser: user => dispatch(setCurretnUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
