import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
  
class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 0.0,
      lng: 0.0
    },
    zoom: 8
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBnyR9r839WhGTVJPP49C7DfxhAeRqd084' }}
          center={this.props.center}
          zoom={this.props.zoom}
        />
      </div>
    );
  }
}
 
export default Gmap;