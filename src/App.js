import React from 'react';
import  HomePage  from './pages/homepage/homepage.component.jsx';
import './App.css';
import { Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
)






function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
    </div>);
}

export default App;
