import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = (props) => {
    // console.log(props.handleAddItems);
    const {name, img, seller, price, stock} = props.products;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className= 'product-information'>
                <h3 className="product-name">{name}</h3>
                <p>by: {seller}</p>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddItems(props.products)} className="cart-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
        
    );
};

export default Products;