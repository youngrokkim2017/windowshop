import React from 'react'
import { Link } from "react-router-dom";

const Product = ({ imageUrl, name, price, description, productId }) => {
    return (
        <div className='product'>
            <img 
                src={imageUrl}
                alt={name} 
            />

            <div className="product-info">
                <p className="info-name">{name}</p>

                <p className="info-description">{description.substring(0, 100)}...</p>

                <p className="info-price">${price}</p>

                <Link to={`/product/${productId}`} className="info-button">
                  View
                </Link>
            </div>
        </div>
    )
}

export default Product
