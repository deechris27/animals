import React from 'react';
import {withRouter} from 'react-router-dom';
import SearchBox from './SearchBox';

function SearchParams(props) {

    const search = () => {
       props.history.push('/')
    };

    return (
        <div className="search-route">
            <SearchBox search={search}/>
        </div>
    )
}

export default withRouter(SearchParams);
