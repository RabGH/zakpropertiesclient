import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { mainBox, iconSocialStyles } from "./navContentStyles";

const SocialIcons = () => {
  return (
    <Box sx={mainBox}>
      <Link
        href="https://api.whatsapp.com/send?phone=123456789"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton sx={iconSocialStyles}>
          <FaWhatsapp fontSize="2rem" />
        </IconButton>
      </Link>
      <Link
        href="mailto:rabiighais@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton sx={iconSocialStyles}>
          <FaEnvelope fontSize="2rem" />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialIcons;
