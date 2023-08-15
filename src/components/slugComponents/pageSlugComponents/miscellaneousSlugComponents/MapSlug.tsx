import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { Box, Typography, IconButton, Modal } from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CloseIcon from "@mui/icons-material/Close";
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
  const muiTheme = useTheme();
  const position: LatLngTuple = [lat, lng];
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mainBox = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "-100%",
    [muiTheme.breakpoints.down("smallphones")]: {
      gap: "45%",
    },
  };

  const contentBox = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    minWidth: "30vw",
  };

  const mapIconBox = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ml: "auto",
  };

  const modalStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: muiTheme.zIndex.modal + 1,
    overflow: "hidden",
  };

  const titleStyles = {
    mb: "1rem",
  };

  const closeButtonStyles = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    color: "#000",
    zIndex: muiTheme.zIndex.modal + 2,
  };

  const modalBoxContainer = {
    position: "relative",
    height: "800px",
    width: "100%",
  };

  return (
    <Box sx={mainBox}>
      <Box sx={contentBox}>
        <Typography variant="h3" sx={titleStyles}>
          Location
        </Typography>
        <Typography variant="body1">{specificAddress}</Typography>
        <Typography variant="body1">{address?.street}</Typography>
        <Typography variant="body1">{address?.city}</Typography>
      </Box>
      <Box sx={mapIconBox}>
        <IconButton onClick={handleOpen}>
          <MapOutlinedIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <Typography variant="body1">View map</Typography>
      </Box>
      <Modal open={open} onClose={handleClose} sx={modalStyles}>
        <Box sx={modalBoxContainer}>
          <IconButton onClick={handleClose} sx={closeButtonStyles}>
            <CloseIcon />
          </IconButton>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "800px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{title}</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Modal>
    </Box>
  );
};

export default MapSlug;
