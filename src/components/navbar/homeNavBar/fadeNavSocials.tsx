import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useScrollTrigger } from "@mui/material";
import { getNavBarStyles } from "../navContentStyles";

const FadeNavSocials = () => {
  const styles = getNavBarStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
    target: typeof window !== "undefined" ? window : undefined,
  });

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (trigger) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [trigger]);

  return (
    <Box
      sx={{
        ...styles.mainBox,
        opacity: visible ? 1 : 0,
        transition: "all 0.3s ease-out",
      }}
    >
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

export default FadeNavSocials;
