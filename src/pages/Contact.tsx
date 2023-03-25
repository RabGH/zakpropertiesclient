import React from 'react';
import ContactTextField from '../components/pageComponents/contact/ContactTextField';
import GeneralButton from '../components/general/GButton';
import { Typography, Box, Container, Grid } from '@mui/material';

import Image from 'next/image'
import logoContact from '../../public/images/logo/logoNoBg.png'

import { useTheme } from '@mui/material/styles'

function Contact() {
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
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
            console.log('Email send succussfully');
            alert('Email Sent succesfully');
        } catch (error) {
            console.error('Error sending email', error);
            alert('Error sending email');
        }
    };
    const muiTheme = useTheme();

    const mainContainer = {
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '5rem',
      };
      
      const titleBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        mr: '15rem',
        width: '100%',
      };
      
      const formBox = {
        maxWidth: '50%',
        padding: '0 24px',
      };
      
      const buttonBox = {
        marginTop: '24px',
      };
      
      const textField = {
        marginTop: '16px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: muiTheme.palette.secondary.dark,
          },
          '&:hover fieldset': {
            borderColor: '#212121',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#212121',
          },
        },
      };
      
      const contactField = {
        width: '700px',
      };
      
      const buttonStyles = {
        marginTop: '24px',
        fontWeight: 'bold',
        '&:hover': {
            color: muiTheme.palette.secondary.dark
        },
      };
      
      const logoStyles = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        
      };
      
      const contactGrid = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '32px',
        '@media screen and (max-width: 768px)': {
          gridTemplateColumns: '1fr',
          justifyContent: 'center',
        },
      };
      
      const imgGrid = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        paddingRight: '24px',
        '@media screen and (max-width: 768px)': {
          justifyContent: 'center',
          paddingRight: '0',
          marginTop: '24px',
        },
      };
      
      return (
        <Container sx={mainContainer}>
          <Box sx={titleBox}>
            <Typography variant='h4'>
              Contact Me
            </Typography>
            <Typography variant='body2'>
              Contact Page, type in your name, email, subject, and message.
            </Typography>
            <Typography variant='body2'>
              I&apos;ll get back to you as soon as I can!
            </Typography>
          </Box>
          <Container>
            <Grid sx={contactGrid}>
              <Box sx={formBox}>
                <form id="ContactForm" onSubmit={handleSubmit}>
                  <Box sx={textField}>
                    <ContactTextField id='name' label='name' name='name' type='text' variant='outlined' size='medium' multiline={false} rows={1} sx={contactField} required />
                  </Box>
                  <Box sx={textField}>
                    <ContactTextField id='email' label='Email' name='email' type='email' variant='outlined' size='medium' multiline={false} rows={1} sx={contactField} required />
                  </Box>
                  <Box sx={textField}>
                    <ContactTextField id='subject' label='Subject' name='subject' type='text' variant='outlined' size='medium' multiline={false} rows={1} sx={contactField} required />
                  </Box>
                  <Box sx={textField}>
                    <ContactTextField id='message' label='Message' name='message' type='multiline' variant='outlined' size='medium' multiline={true} rows={5} sx={contactField} required />
                  </Box>
                  <Box sx={buttonBox}>
                    <GeneralButton label='Send' size='large' onClick={() => {}} sx={buttonStyles}>
                      Send
                    </GeneralButton>
                  </Box>
                </form>
              </Box>
              <Grid sx={imgGrid}>
                <Box sx={logoStyles}>
                  <Image src={logoContact} alt=''/>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      );  
}

export default Contact;