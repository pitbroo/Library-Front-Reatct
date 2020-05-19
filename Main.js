import React from 'react';
import { Component } from 'react';
import App from './App';
import Book from './Book.js';
import './Main.css';




class Main extends Component {

    render() {
        return(
            <main>
                <Book />
            </main>
        );
    }
}

export default Main