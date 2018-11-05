import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      showInfoWindow: false,
    }
  }

  onClick() {
    this.setState({ showInfoWindow: true });
  }

  render() {
    const { google, drone } = this.props;
    const { showInfoWindow } = this.state;
    const mapOptions = {
      google,
      style: {
        width: '100%',
        height: '100%'
      },
      initialCenter: {
        lat: 29.7604,
        lng: -95.3698
      },
      zoom: 5
    }
    const marker = {
      lat: drone.latitude,
      lng: drone.longitude
    }
    const style = {
      width: '67vw',
      height: '64vh',
      position: 'relative'
    }
    return (
      <div style={style} className="map">
        <Map
          {...mapOptions}
        >
          <Marker position={marker} onClick={this.onClick}>
            {
              showInfoWindow &&
              <InfoWindow
              >
                <div>Metric: {drone.metric}</div>
              </InfoWindow>
            }
          </Marker>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDii1oc4ZqdDp8ZpDSB4tt_kXvcovD1wng'
})(GoogleMap);