import React from "react";
import ContactTextField from "@/components/pageComponents/contact/ContactTextField";
import GeneralButton from "@/components/general/GButton";
import { Typography, Box, Container, Grid } from "@mui/material";

import Image from "next/image";
import logoContact from "../../public/images/logo/logoNoBg.png";

import { getContactStyles } from "@/components/pageComponents/contact/contactStyles";

function Contact() {
  const styles = getContactStyles();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = document.querySelector<HTMLFormElement>("form#ContactForm")!;
    const formData = new FormData(form);
    const data: { [key: string]: string } = {};
    for (let entry of formData.entries()) {
      data[entry[0] as string] = entry[1] as string;
    }

    console.log(data);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      console.log("Email send succussfully");
      alert("Email Sent succesfully");
    } catch (error) {
      console.error("Error sending email", error);
      alert("Error sending email");
    }
  };

  return (
    <Container sx={styles.mainContainer}>
      <Box sx={styles.titleBox}>
        <Typography variant="h4">Contact Me</Typography>
        <Typography variant="body1">
          Contact Page, type in your name, email, subject, and message.
        </Typography>
        <Typography variant="body1">
          I&apos;ll get back to you as soon as I can!
        </Typography>
      </Box>
      <Container>
        <Grid sx={styles.contactGrid}>
          <Box sx={styles.formBox}>
            <form id="ContactForm" onSubmit={handleSubmit}>
              <Box sx={styles.textField}>
                <ContactTextField
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
                />
              </Box>
              <Box sx={styles.textField}>
                <ContactTextField
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
                />
              </Box>
              <Box sx={styles.textField}>
                <ContactTextField
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
                />
              </Box>
              <Box sx={styles.textField}>
                <ContactTextField
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
                />
              </Box>
              <Box sx={styles.buttonBox}>
                <GeneralButton
                  label="Send"
                  size="large"
                  onClick={() => {}}
                  sx={styles.buttonStyles}
                >
                  Send
                </GeneralButton>
              </Box>
            </form>
          </Box>
          <Grid sx={styles.imgGrid}>
            <Box sx={styles.logoStyles}>
              <Image
                src={logoContact}
                alt=""
                style={{ filter: "invert(100%)" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Contact;
