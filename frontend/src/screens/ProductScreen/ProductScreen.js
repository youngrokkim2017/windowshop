import React from 'react'
import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className='productscreen'>
            <div className='productscreen-left'>
                <div className='left-image'>
                    <img src='' alt='' />
                </div>
                <div className='left-info'>
                    <p className='left-name'>
                        Product name
                    </p>
                    <p>
                        Price
                    </p>
                    <p>
                        Description
                    </p>
                </div>
            </div>
            <div className='productscreen-right'>
                <div className='right-info'>
                    <p>
                        Price: <span>$price</span>
                    </p>
                    <p>
                        Status: <span>in stock/out of stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value='1'>1</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'>Add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
