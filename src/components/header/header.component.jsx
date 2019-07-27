import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils.js';

const handleSignOut = async ()=>{
    auth.signOut().catch((error)=>(console.log(error)));
}

const Header = ({currentUser}) => (
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
        </div>
    </div>
);
export default Header;