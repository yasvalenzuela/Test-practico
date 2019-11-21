import React, { useEffect, useRef, useState } from 'react';
import SearchService from '../../services/SearchService';
import Logo from './../../../Assets/Logo_ML.png';
import IconSearch from './../../../Assets/ic_Search.png';
import ProductList from '../ProductList';
import style from './style.scss';

const Search = (props) => {
    const inputRef = useRef('');
    const [item, setItem] = useState([]);
    const { param } = props;
    const { search } = props;
    
    let res = [];

    const submit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        SearchService.getSearch(inputRef.current.value).then((response, i) => {
            if(response) {
                response.map(data => {
                    res = data.items;
                })
            }
            setItem(res);
            
            window.location.href=`/items?search=${inputRef.current.value}`
        });
    }

    useEffect(()=>{
        let filter = (search && (search.indexOf('=')!= -1)) ? search.split('=')[1] : '';
        inputRef.current.value = filter;
        SearchService.getSearch(filter).then((response, i) => {
            if(response) {
                response.map(data => {
                    res = data.items;
                })
            }
            setItem(res);
        });
    },[]);

    return(
        <>
            <div className="nav-header">
                <img className="nav-header-logo" src={Logo}/>

                <form className="nav-header-form" >
                    <input ref={inputRef} className="nav-header-input" type="text" />
                    <button className="nav-header-btn" onClick={submit}>
                        <img src={IconSearch} />
                    </button>
                </form>
            </div>
            <div className="item-product-background">
                {item.map((item, i) => (
                    <ProductList key={i} item={item} />
                )
            )}
            </div>
        </>
    )
}

export default Search;