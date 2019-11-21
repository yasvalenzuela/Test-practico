import React, { useEffect, useState} from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import style from './style.scss';

const ProductList = ({item}) => {

    return(
        <Link className="item-product-wrap" to={'/items/:'+item.items.id}>
            <img className="item-product-image" src={item.items.picture}/>
            <div className="item-product-info-wrap">
                <span className="item-product-price">$ {item.items.price.price}</span>
                <span className="item-product-text">{item.items.title}</span>
            </div>
        </Link>     
    )
}

export default ProductList;