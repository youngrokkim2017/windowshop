import React from 'react'
import './CartItem.css'
import { Link } from 'react-router-dom'

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className='cartitem'>
            <div className='cartitem-image'>
                <img src={item.imageUrl} alt='' />
            </div>

            <Link to={`/product/${item.product}`}>
                <p>{item.name}</p>
            </Link>

            <p className='cartitem-price'>  
                ${item.price}
            </p>

            <select className='cartitem-select' value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
            </select>

            <button className='cartitem-deleteBtn' onClick={() => removeHandler(item.product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
