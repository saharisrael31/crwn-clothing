import React from 'react';
import  HomePage  from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      this.setState({currentUser: userAuth});
      
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
    );
  }
}
export default App;
