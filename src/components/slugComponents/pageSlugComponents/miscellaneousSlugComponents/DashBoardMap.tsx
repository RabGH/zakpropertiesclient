import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Project, Property } from "@lib/types";
import L from "leaflet";

interface DashBoardMapProps {
  properties: Property[];
  projects: Project[];
}

//! Mostly Only used in index.tsx currently

const DashBoardMap: React.FC<DashBoardMapProps> = ({
  properties,
  projects,
}) => {
  const center: L.LatLngExpression = [25.2697, 55.3095];
  const zoom = 10;

  return (
    <div>
      <MapContainer
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        center={center}
        zoom={zoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {[...properties, ...projects].map((item) => (
          <Marker
            key={item._id}
            position={[item.location?.lat ?? 0, item.location?.lng ?? 0]}
          >
            <Popup>{item.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DashBoardMap;
