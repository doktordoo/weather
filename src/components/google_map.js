import React, { Component } from "react";

class GoogleMap extends Component {
  // lifecycle method which is automatic called when component has loaded
  componentDidMount() {
    new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    // 
    return <div id="map" />;
  }
}

export default GoogleMap;
