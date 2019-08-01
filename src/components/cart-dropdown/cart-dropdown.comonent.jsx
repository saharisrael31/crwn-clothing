import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
    
    return (
    <div className='cart-dropdown' >
        <div className='cart-items'>
            {
               cartItems.lenght === 0?(<p>cart has items</p>):(<p>cart have no items</p>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);}

const mapStateToProps = ({cart}) =>({
    cartItems: cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);