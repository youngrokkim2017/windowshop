import React from 'react'
import './CartScreen.css'
import CartItem from '../../components/CartItem/CartItem' 

const CartScreen = () => {
    return (
        <div className='cartscreen'>
            <div className='cartscreen-left'>
                <h2>Shopping Cart</h2>
                <CartItem />
            </div>
            <div className='cartscreen-right'>
                <div className='cartscreen-info'>
                    <p>subtotal count</p>
                    <p>$price</p>
                </div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default CartScreen
