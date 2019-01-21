import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
  
class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 7
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBnyR9r839WhGTVJPP49C7DfxhAeRqd084' }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}
 
export default Gmap;