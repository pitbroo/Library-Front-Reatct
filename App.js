import React from 'react';
import logo from './logo.svg';
import './App.css';
import Book from'./Book.js';
import Header from './Header.js';
import {Helmet} from 'react-helmet';
import Footer from './Footer.js';
import Main from './Main.js';
import Button from 'react-bootstrap/Button';
import Search from './Search';
import Login from './Login';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <Helmet>
        <title>Bilbioteka Szkolna </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"></link>
        {/* Boodstrap */}
      </Helmet>
      <Router>
        <Header/>
        <Main />
      </Router>
      <Footer/>
    </div>
  );
}


export default App;
