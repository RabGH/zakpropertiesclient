import React, { Ref, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Project, Property } from "../../../../types";
import L, { LatLngBounds, LatLngExpression } from "leaflet";

interface DashBoardMapProps {
  properties: Property[];
  projects: Project[];
}

const DashBoardMap: React.FC<DashBoardMapProps> = ({
  properties,
  projects,
}) => {
  const mapRef = useRef<React.RefObject<typeof MapContainer>>(null);

  useEffect(() => {
    if (mapRef.current && (properties.length > 0 || projects.length > 0)) {
      const bounds = new LatLngBounds(
        [51.505, -0.09] as LatLngExpression, // southWest
        [51.5, -0.1] as LatLngExpression // northEast
      );
      [...properties, ...projects].forEach((item) => {
        bounds.extend([
          item.location.lat as number,
          item.location.lng as number,
        ] as LatLngExpression);
      });
      const map = mapRef.current;
      map.fitBounds(bounds);
    }
  }, [properties, projects]);

  const center: LatLngExpression = L.latLng(25.276987, 55.296249);
  // const [map, setMap] = useState(null);

  return (
    <div>
      <MapContainer
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
        center={center}
        zoom={10}
        ref={mapRef as React.MutableRefObject<typeof MapContainer | null>}
        // whenCreated={setMap}
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
