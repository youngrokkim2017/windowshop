import React from 'react'
import './CartItem.css'
import { Link } from 'react-router-dom'

const CartItem = () => {
    return (
        <div className='cartitem'>
            <div className='cartitem-image'>
                <img src='' alt='' />
            </div>

            <Link to={`/product/${1}`}>
                <p>Product 1</p>
            </Link>

            <p className='cartitem-price'>  
                $ price
            </p>

            <select className='cartitem-select'>
                <option value='1'>1</option>
            </select>

            <button className='cartitem-deleteBtn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
