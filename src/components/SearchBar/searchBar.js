import React from 'react';
import './searchBar.css'

class SearchBar extends React.Component {

    render() {

        return(
            <div className="searchBar">
                <label htmlFor="search">Search:</label>
                <input type="search" />
                <button className="button_search">Go</button>
            </div>
        );
    }
}

export default SearchBar;