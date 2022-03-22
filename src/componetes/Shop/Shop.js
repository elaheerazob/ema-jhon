import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [card,setCard] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const bottonAddtoCart = (products) =>{
        console.log(products);
        const newCard =[...card,products]
        setCard(newCard)
    }

    

    return (
        <div className='products'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        bottonAddtoCart={bottonAddtoCart}
                          ></Product>)
                }
            </div>
            <div className='order-container'>
                <h3>Order summary</h3>
                <p>Select item : {card.length}</p>
            </div>
        </div>
    );
};

export default Shop;