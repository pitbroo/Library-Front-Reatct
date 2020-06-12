import { Component } from "react";
import React from 'react';
import "./Contact.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Contact extends Component {
    render() {
        return (    
            <div>
                <div className="containerForm">
                    

                        <div className>
                        { <Map google={this.props.google}
                         style={{
                            width: '500px',
                            height: '600px'
                          }}
                          zoom={5}>
                            
                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <div>
                                    { <h1>Mapa</h1> }
                                </div>
                            </InfoWindow>
                        </Map> }

                        </div>
                    <div className="contact-form">
                        <h1 className="title">Kontakt</h1>
                        <h2 className="subtitle">Skontaktuj się z nami</h2>
                        <form action="">
                            <input type="text" name="name" placeholder="Imie i nazwisko" />
                            <input type="email" name="e-mail" placeholder="Twój adres mailowy" />
                            <input type="tel" name="phone" placeholder="Twój numer telefonu" />
                            <textarea name="text" id="" rows="8" placeholder="Twoja wiadomość"></textarea>
                            <button className="btn-send">Get a Call Back</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAnfzYwjz2DMiqB2S2Jcolt1GfWhg0Y4s0")
  })(Contact)
