import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Socials from "./Socials";

function Footer() {
  const muiTheme = useTheme();

  const mainContainer = {
    bgcolor: muiTheme.palette.warning.main,
    borderTop: `1px solid ${muiTheme.palette.secondary.dark}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 0",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
  };

  const linkBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "8px",
  };

  const linkStyles = {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: muiTheme.palette.success.dark,
    textDecoration: "none",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "15px",
    margin: "0 0px",
    "&:hover": {
      color: muiTheme.palette.error.light,
      backgroundColor: "transparent",
      boxShadow: "none",
      textDecoration: "none",
    },
  };

  const copyRightStyles = {
    color: "black",
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={linkBox}>
        <Link href="/">
          <Button variant="contained" sx={linkStyles}>
            Home
          </Button>
        </Link>

        <Link href="/about">
          <Button variant="contained" sx={linkStyles}>
            About
          </Button>
        </Link>

        <Link href="/contact">
          <Button variant="contained" sx={linkStyles}>
            Contact
          </Button>
        </Link>
      </Box>
      <Box sx={linkBox}>
        <Typography variant="h6" gutterBottom></Typography>
        <Socials />
      </Box>
      <Typography variant="body1" align="center" sx={copyRightStyles}>
        © 2023 ZakProperties. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
