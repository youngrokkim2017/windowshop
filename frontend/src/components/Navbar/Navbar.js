import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* logo */}
            <div className='navbar-logo'>
                <h2>Shopping Cart</h2>
            </div>

            {/* links */}
            <ul className='navbar-links'>
                <li>
                    <Link to='/cart' className='cart-link'>
                        {/* icon */}
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo-badge'>
                            0
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className='hamburger-menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
