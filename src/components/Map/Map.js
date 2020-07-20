import React from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import { Typography, Paper } from "@material-ui/core";
class Map extends React.Component {
  constructor() {
    super();
    this.mapRef = React.createRef();
    this.state = {
      lng: 106.65, //10.784328, 106.654547
      lat: 10.78,
      zoom: 13,
    };
  }

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGVhcnZpcDAiLCJhIjoiY2p3cmx0Nm94MWlnNDQ4cGxndGJ2NDk5ayJ9.7RAd-OPulAnduD9tg4S5OA";
    // create mapbox object
    var map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <Paper>
        <div className="sidebarStyle">
          Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
          {this.state.zoom}
        </div>
        <div style={{ width: "100%", height: "100vh" }} ref={this.mapRef}></div>
      </Paper>
    );
  }
}

export default Map;
