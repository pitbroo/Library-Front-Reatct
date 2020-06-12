import { Component } from "react";
import React from 'react';
import "./Login.css"

class Login extends Component{
    render(){
        return(
        <form className="LoginForm">
            <h2>Panel Logowania</h2>
            <input className="Input1" placeholder="Login"></input><br/>
            <input className="Input1" placeholder="Hasło" type="password"></input><br></br>
            <button type="button" className="ui blue button" >Zaloguj się</button>
        </form>
        )
    }
}
export default Login;