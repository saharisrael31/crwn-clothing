import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.comonent.jsx'
import { auth } from '../../firebase/firebase.utils.js';
import './header.styles.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';



const handleSignOut = async ()=>{
    auth.signOut().catch((error)=>(console.log(error)));
}

const Header = ({currentUser, CartHidden}) => (
    <div className='header' >
        <Link to='/' className='logo-container' >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {currentUser?(
                <div className='option' onClick={handleSignOut} >
                    SIGN-OUT
                </div>
            ):(
                <Link className='option' to='/signIn'>
                    SIGN-UP
                </Link>
            )}
            <CartIcon />
        </div>
        {
        CartHidden? null : (<CartDropdown />)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    CartHidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);