import { Component } from "react";
import React from 'react';
import "./Contact.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Mapka from './Mapka';
import Popup from "reactjs-popup";

class Contact extends Component {
   
    render() {
        return (    
            <div>
                 <Mapka />
                <div className="containerForm">
                    


                    <div className="contact-form">
                        <h1 className="title">Kontakt</h1>
                        <h2 className="subtitle">Skontaktuj się z nami</h2>
                        <form action="">
                            <input type="text" name="name" placeholder="Imie i nazwisko" />
                            <input type="email" name="e-mail" placeholder="Twój adres mailowy" />
                            <input type="tel" name="phone" placeholder="Twój numer telefonu" />
                            <textarea name="text" id="" rows="8" placeholder="Twoja wiadomość"></textarea>
                            <button className="btn-send">Wyślij!</button>
                        </form>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact;
