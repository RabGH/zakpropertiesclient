import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { getNavBarStyles } from "../navContentStyles";

const SocialIcons = () => {
  const styles = getNavBarStyles();
  return (
    <Box sx={styles.mainBox}>
      <Link
        href="https://api.whatsapp.com/send?phone=123456789"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton sx={styles.iconSocialStyles}>
          <FaWhatsapp fontSize="2rem" />
        </IconButton>
      </Link>
      <Link
        href="mailto:rabiighais@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton sx={styles.iconSocialStyles}>
          <FaEnvelope fontSize="2rem" />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialIcons;
