// This is Map component
import react from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Helper = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map />;
};

const Map = () => {
  return <GoogleMap zoom={10} center={{lat: 47.8586281, lng: -122.3373016}} mapContainerClassName="map-container"></GoogleMap>
}

export default Helper;