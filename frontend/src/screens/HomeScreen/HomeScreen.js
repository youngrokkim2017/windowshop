import React from 'react'
import './HomeScreen.css'
import Product from '../../components/Product/Product'

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <h2 className='homescreen-title'>Latest Products</h2>
            <div className='homescreen-products'>
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen
