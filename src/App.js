import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import InputModal from "./InputModal";

export const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const [isModal, setIsModal] = useState(false);

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  // const defaultCenter = {
  //   lat: 23.63,
  //   lng: 90.4961,
  // };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat && (
          <Marker
            position={currentPosition}
            onClick={() => setIsModal(!isModal)}
          />
        )}
        {isModal ? <InputModal position={currentPosition} /> : ""}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
