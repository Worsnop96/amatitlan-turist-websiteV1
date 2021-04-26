import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {lat: 14.481463, lng: -90.626832},          
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
          lat: 14.481463,
          lng: -90.626832
        }
      }
    >
      <Marker
        onClick={this.onMarkerClick}
        name={'Castillo de  Dorión'}
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