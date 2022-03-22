import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);

    const {name,seller,price,ratings,img} =props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price :{price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={() => props.bottonAddtoCart(props.product)} className='button-cart'>
                <p className='button-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;