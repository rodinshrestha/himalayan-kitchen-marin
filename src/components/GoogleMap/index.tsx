import React from "react";
import GoogleMapReact from "google-map-react";
import { StyledDiv } from "./style";
import settings from "content/settings/settings.json";
import { MapPin } from "react-feather";

const GoogleMap = () => {
  const {
    map_latitude = "37.97623419013312",
    map_longitude = "-122.5145665053485",
    map_zoom_level = "14",
  } = settings || {};

  const defaultProps = {
    center: {
      lat: Number(map_latitude),
      lng: Number(map_longitude),
    },
    zoom: Number(map_zoom_level),
  };
  return (
    <StyledDiv>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker />
      </GoogleMapReact>
    </StyledDiv>
  );
};

export default GoogleMap;

const Marker = () => {
  return (
    <div style={{ color: "red" }}>
      <MapPin />
    </div>
  );
};
