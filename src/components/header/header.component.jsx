import React from 'react';
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.comonent.jsx'
import './header.styles.scss';


const handleSignOut = async ()=>{
    auth.signOut().catch((error)=>(console.log(error)));
}

const Header = ({currentUser, CartDropdownHidden}) => (
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
        CartDropdownHidden? null : (<CartDropdown />)
        }
    </div>
);

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser: currentUser,
    CartDropdownHidden: hidden
});


export default connect(mapStateToProps)(Header);