import React, {useEffect, useState} from 'react';
import DetailService from './../../services/ProductDetail';
import Search from '../Search';
import style from './style.scss';

const ProductDetail = (props) => {
    

    const [item, setItem] = useState(null);
    let res=[];

    useEffect(() => {
        const idI = props.match.params.id;
        console.log(idI)
        openDetail(idI);
    }, []);

    const openDetail = (idI) => {
        DetailService.getProductDetail(idI).then((response => {
            console.log(response, "response");
            if(response) {
                response.map(data => {
                    res = data.items;
                    console.log(res, "res");
                })
                setItem(res);  
            }
            
        }))
    }

    if(!item) return '';

    return (
        <div className="product-detail">
            <Search />
            <div className="product-detail-container">
                <img className="product-detail-image" src={item.picture}/>
                <div className="product-detail-info-container">
                    <span className="product-detail-title">{item.title}</span>
                    <span className="product-detail-price" >$ {item.price.price}</span> 
                </div>
            </div>
            <div className="product-detail-description-container">
                <span className="product-detail-description-title">Descripción del producto</span>
                <span className="product-detail-description">{item.description ? item.description : 'Despacho sin recargo dentro de Santiago centro y eje Providencia.Despacho a regiones por Tur Bus o Chilexpress'}</span>
            </div>
        </div>
        
    )
}

export default ProductDetail;