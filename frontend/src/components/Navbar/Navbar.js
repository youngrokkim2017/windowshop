import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            {/* logo */}
            <div>
                <h2>Shopping Cart</h2>
            </div>

            {/* links */}
            <ul>
                <li>
                    <Link to='/cart'>
                        {/* icon */}
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span>
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
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
