import React, { useEffect, useState } from 'react';
import { addToDb, getStroedCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [card,setCard] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    // useEffect ( () =>{
    //     const storedCart = getStroedCard();
    //     const saveCard = [];
    //     for(const id of storedCart){
    //         const addedProcuct =products.find(product => product.id === id );
    //         if(addedProcuct){
    //             saveCard.push(addedProcuct)
    //         }
    //     }
    //     setCard(saveCard);
    // }, [])

    useEffect( () => {
        const storedCart = getStroedCard();
        const saveCard = [];
        for(const id in storedCart){
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                const quantity =storedCart[id];
                addProduct.quantity =quantity;
                saveCard.push(addProduct)
            }
        }
        setCard(saveCard);
    },[products])

    const bottonAddtoCart = (selectedProducts) =>{
        let newCart = [];
        const exists = card.find(product => product.id === selectedProducts.id)
        if(!exists){
            selectedProducts.quantity = 1;
            newCart =[...card, selectedProducts]
        }else{
            const rest = card.filter(product => product.id !== selectedProducts.id);
            exists.quantity =exists.quantity + 1;
            newCart =[...rest,exists];
        }
        const newCard =[...card,selectedProducts]
        setCard(newCard)
        addToDb(selectedProducts.id)
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
                <Cart card={card}></Cart>
            </div>
        </div>
    );
};

export default Shop;