import React from 'react'
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className='product'>
            <img src={} alt={} />

            <div className="product-info">
                <p className="info-name"></p>

                <p className="info-description"></p>

                <p className="info-price"></p>

                <Link to={`/product/${productId}`} className="info-button">
                  View
                </Link>
            </div>
        </div>
    )
}

export default Product
