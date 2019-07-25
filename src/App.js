import React from 'react';
import  HomePage  from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
    </div>);
}

export default App;
