import React, { Fragment } from 'react';
import './SearchBox.css';

export const SearchBox = ({ onSearch, placeholder }) => {
    return (
        <Fragment>
            <input className="search" type="search" placeholder={placeholder} onChange={onSearch} />
        </Fragment>
    );
};
