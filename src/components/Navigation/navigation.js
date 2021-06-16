import React from 'react';
import './navigation.css'
import SearchBar from '../SearchBar/searchBar.js';

class Navigation extends React.Component {

    effet = (e) => {
        console.log(e);
    }

    render() {

        return(
            <nav>
                <ul>
                    <li onClick={() => this.effet("Accueil")} className="button_nav">Link 1</li>
                    <li onMouseOver={() => this.effet("Galerie")} className="button_nav">Link 2</li>
                    <li onDoubleClick={() => this.effet("Content")} className="button_nav">Link 3</li>
                </ul>
                <SearchBar />
            </nav>
        );
    }
}

export default Navigation;