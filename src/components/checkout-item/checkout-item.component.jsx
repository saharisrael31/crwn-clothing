import React from 'react';
import { connect } from 'react-redux'

import { clearCartItem, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ( { item, clearCartItem, removeItem, addItem } ) => {
    const { name, quantity, price, imageUrl } = item;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name' >{name}</span>
        <span className='quantity' >
            <div 
            className='arrow' 
            onClick={()=>addItem(item)}>
                &#9650;
            </div>
            <div className='value'>
            {quantity}
            </div>
            <div 
            className='arrow' 
            onClick={()=>removeItem(item)}>
                &#9660;
            </div>
        </span>
        <span className='price' >${price}</span>
        <span className='remove-button' onClick={()=>clearCartItem(item)} >&#10005;</span>
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearCartItem: item => dispatch(clearCartItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);