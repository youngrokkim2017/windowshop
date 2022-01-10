import React, { useState, useEffect } from 'react'
import './ProductScreen.css'
import { useDispatch, useSelector } from 'react-redux'
// Actions
import { getProductDetails, getProducts }  from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartActions'

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.getProductDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

    return (
        <div className='productscreen'>
            {loading ? 
                <h2>Loading...</h2> 
                : error ? 
                <h2>{error}</h2>
                :
                <>
                <div className='productscreen-left'>
                    <div className='left-image'>
                        <img src={product.imageUrl} alt='' />
                    </div>
                    <div className='left-info'>
                        <p className='left-name'>
                            {product.name}
                        </p>
                        <p>
                            ${product.price}
                        </p>
                        <p>
                            Description: {product.description}
                        </p>
                    </div>
                </div>
                <div className='productscreen-right'>
                    <div className='right-info'>
                        <p>
                            Price: <span>${product.price}</span>
                        </p>
                        <p>
                            Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                        </p>
                        <p>
                            Qty
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((p) => (
                                    <option key={p + 1} value={p + 1}>{p + 1}</option>
                                ))}
                            </select>
                        </p>
                        <p>
                            <button type='button'>Add to cart</button>
                        </p>
                    </div>
                </div>
                </>
            }
        </div>
    )
}

export default ProductScreen
