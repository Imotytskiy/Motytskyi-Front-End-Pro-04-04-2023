import React from "react";
import GoogleMapReact from "google-map-react";

export default function Container({ selectedEventKey }) {
  console.log(selectedEventKey);

  const cityCoordinates = {
    0: { lat: 50.4501, lng: 30.5234 },
    1: { lat: 52.52, lng: 13.405 },
    2: { lat: 48.8566, lng: 2.3522 },
    3: { lat: 40.4168, lng: -3.7038 },
    4: { lat: 41.9028, lng: 12.4964 },
    5: { lat: 52.2297, lng: 21.0122 },
  };

  const center = cityCoordinates[selectedEventKey] || {
    lat: 50.99835602,
    lng: 10.502627,
  };

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={center}
        defaultZoom={6}
      ></GoogleMapReact>
    </div>
  );
}
