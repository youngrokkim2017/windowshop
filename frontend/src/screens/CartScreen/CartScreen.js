import React, { useEffect } from 'react'
import './CartScreen.css'
import CartItem from '../../components/CartItem/CartItem' 
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// Actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

const CartScreen = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    
    return (
        <div className='cartscreen'>
            <div className='cartscreen-left'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your Cart is Empty
                        <Link to='/'>Go Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem 
                        item={item} 
                        qtyChangeHandler={qtyChangeHandler} 
                        removeHandler={removeHandler} 
                    />
                ))}
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
