import React from 'react';
import Search from '../Search';

const SearchContainer = (props) => {
    const param = props.match.params.search;
    const { search } = props.location;

    return(
        <>
            <Search param={param} search={search}/>
        </>
    )
}

export default SearchContainer;