import React, { useEffect, useRef, useState } from 'react';
import SearchService from './../../services/SearchService';
import Logo from './../../../Assets/Logo_ML.png';
import IconSearch from './../../../Assets/ic_Search.png';
import ProductList from './../ProductList';
import style from './style.scss';

const Search = (props) => {
    const inputRef = useRef('');
    const [item, setItem] = useState([]);

    let res = [];

    const submit = () => {
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
        const param = props.match.params.search;
        const { search } =props.location;
        let filter =  (search.indexOf('=')!= -1) ? search.split('=')[1] : '';
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
        <div>
            <div className="nav-header">
                <img className="nav-header-logo" src={Logo}/>
            
                <form className="nav-header-form" >
                    <input ref={inputRef} className="nav-header-input" type="text" />
                    <div className="nav-header-btn" onClick={submit}>
                        <img src={IconSearch} />
                    </div>
                </form>
            </div>
            <div className="item-product-background">
                {item.map((item, i) => (
                    <ProductList key={i} item={item} />
                )
            )}
            </div>
        </div>
    )
}

export default Search;