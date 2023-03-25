import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

interface MapSlugProps {
  lat: number;
  lng: number;
  title: string;
}

const MapSlug: React.FC<MapSlugProps> = ({ lat, lng, title }) => {
  const position: LatLngTuple = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSlug;
