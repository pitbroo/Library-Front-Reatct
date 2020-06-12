import React from 'react';
import { Component } from 'react';
import './Header.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <header>
                <div class="header">
                    <div className="header-left" > 
                        <h2 class="ui header">
                            <img className="ui image" src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-b-letter-shape-library-bookshelf-png-image_5304276.jpg" />
                            Biblioteka Corona
                            </h2>
                        </div>
                    <div className="header-right">
                        <Link to="/"><a className="active">Home</a></Link>
                        <Link to="/Contact"><a>Kontakt</a></Link>
                        <Link to="/Books"><a>Nasze książki</a></Link>
                        <Link to="/About"><a >O bibliotece</a></Link>
                        <Link to="/login"><a >Zaloguj się</a></Link>
                    </div>
                </div>
                <div className="HeaderH">
                    <h>
                        Witaj w naszej bibliotece!
                    </h>
                </div>
            </header>
        )
    }
}
export default Header