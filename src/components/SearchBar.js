import React from 'react';

function SearchBar({searchTerm, onSearchChange}) {
    return (
        <form class = "search-bar">
            <input placeholder = "Search" value = {searchTerm} onChange = {onSearchChange}></input>
            <button type = "Submit"></button>
        </form>
    );
}

export default SearchBar;