import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
  FormControl,
} from "@mui/material";

// import Image from "next/image";
// import logoContact from "../../public/images/logo/logoNoBg.png";

import { getContactStyles } from "@/components/pageComponents/contact/contactStyles";

function Contact() {
  const styles = getContactStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contactMe/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      console.log("Email send successfully");
      setSnackMessage("Email Sent successfully");
      setSnackOpen(true);
    } catch (error) {
      console.error("Error sending email", error);
      setSnackMessage("Error sending email");
      setSnackOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackClose = (
    event: Event | React.SyntheticEvent<any, Event>,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  return (
    <Container sx={styles.mainContainer}>
      <Box sx={styles.titleBox}>
        <Typography variant="h4">Contact Me</Typography>
        <Typography variant="body1">
          Contact Page, type in your name, email, subject, and message.
        </Typography>
        <Typography variant="body1">
          W&apos;ll get back to you as soon as we can!
        </Typography>
      </Box>
      <Container>
        <Grid sx={styles.contactGrid}>
          <Box sx={styles.formBox}>
            <form id="ContactForm" onSubmit={handleSubmit}>
              <FormControl sx={styles.formControl} variant="outlined">
                <Box sx={styles.textField}>
                  <TextField
                    id="name"
                    label="name"
                    name="name"
                    type="text"
                    variant="outlined"
                    size="medium"
                    multiline={false}
                    rows={1}
                    sx={styles.contactField}
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={styles.textField}>
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    size="medium"
                    multiline={false}
                    rows={1}
                    sx={styles.contactField}
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={styles.textField}>
                  <TextField
                    id="subject"
                    label="Subject"
                    name="subject"
                    type="text"
                    variant="outlined"
                    size="medium"
                    multiline={false}
                    rows={1}
                    sx={styles.contactField}
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={styles.textField}>
                  <TextField
                    id="message"
                    label="Message"
                    name="message"
                    type="multiline"
                    variant="outlined"
                    size="medium"
                    multiline={true}
                    rows={5}
                    sx={styles.contactField}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Box>
              </FormControl>
              <Box sx={styles.buttonBox}>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={styles.buttonStyles}
                >
                  {loading ? <CircularProgress size={24} /> : "Send"}
                </Button>
              </Box>
            </form>
          </Box>
          <Grid sx={styles.imgGrid}>
            <Box sx={styles.logoStyles}>
              {/* <Image
                src={logoContact}
                alt=""
                style={{ filter: "invert(100%)" }}
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        message={snackMessage}
        sx={styles.snackbarStyles}
      />
    </Container>
  );
}

export default Contact;
