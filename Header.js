import React from 'react';
import { Component } from 'react';
import './Header.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';



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
                    <div class="header-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a href="#login">Login</a>
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