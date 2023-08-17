import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Project, Property } from "@lib/types";
import { Box, Typography } from "@mui/material";
import { LatLngTuple } from "leaflet";

interface DashBoardMapProps {
  properties: Property[];
  projects: Project[];
  lat: number;
  lng: number;
}

//! Mostly Only used in index.tsx currently

const DashBoardMap: React.FC<DashBoardMapProps> = ({
  properties,
  projects,
  lat,
  lng,
}) => {
  const zoom = 9;
  const position: LatLngTuple = [lat, lng];

  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        mb: "3rem",
      }}
    >
      <MapContainer
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={zoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {[...properties, ...projects].map((item) => (
          <Marker
            key={item._id}
            position={[
              item.address?.location?.lat ?? 0,
              item.address?.location?.lng ?? 0,
            ]}
          >
            <Popup>{item.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default DashBoardMap;
