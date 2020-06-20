import { Component } from "react";
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Mapka extends Component {
    
    render(){
        return(
        <div className>
            { <Map google={this.props.google} initialCenter={{
            lat: 52.1585764,
            lng: 21.0334632
          }}
            style={{
                width: '35%',
                height: '650px'
            }}
            zoom={13}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        { <h1>Mapa</h1> }
                    </div>
                </InfoWindow>
            </Map> }
        </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAnfzYwjz2DMiqB2S2Jcolt1GfWhg0Y4s0")
  })(Mapka)
