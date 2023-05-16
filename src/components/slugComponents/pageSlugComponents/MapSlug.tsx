import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { Box, Typography, IconButton, Modal, Backdrop } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { useTheme } from "@mui/material";

interface MapSlugProps {
  lat: number;
  lng: number;
  title: string;
  address: {
    street: string;
    city: string;
  };
  specificAddress: string;
}

const MapSlug: React.FC<MapSlugProps> = ({
  lat,
  lng,
  title,
  address,
  specificAddress,
}) => {
  const theme = useTheme();
  const position: LatLngTuple = [lat, lng];
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h6">Location</Typography>
        <Typography variant="body2">{specificAddress}</Typography>
        <Typography variant="body2">{address?.street}</Typography>
        <Typography variant="body2">{address?.city}</Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <IconButton onClick={handleOpen}>
          <MapIcon sx={{ fontSize: 80 }} />
        </IconButton>
        <Typography variant="body2">View map</Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: theme.zIndex.modal + 1,
          overflow: "hidden",
        }}
      >
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
      </Modal>
    </Box>
  );
};

export default MapSlug;
