import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: { lat: 14.488121, lng: -90.611200},          
    selectedPlace: {}          
  };

  render() {
    return (
      <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={
        {
          lat: 14.488121,
          lng: -90.611200
        }
      }
    >
      <Marker
        onClick={this.onMarkerClick}
        name={'Lago de Amatitlan'}
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBk-mhdJWJ08D44ul61tjIuZ2QkzLpAZUc'
})(MapContainer);