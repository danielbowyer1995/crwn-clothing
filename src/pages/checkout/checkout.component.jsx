import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>PRODUCT</span>
            </div>
            <div className='header-block'>
                <span>DESCRIPTION</span>
            </div>
            <div className='header-block'>
                <span>QUANTITY</span>
            </div>
            <div className='header-block'>
                <span>PRICE</span>
            </div>
            <div className='header-block'>
                <span>REMOVE</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
            ))
        }
        <div className='total'>
            <span>Total: £{total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage)