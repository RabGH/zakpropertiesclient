import React from 'react';
import GeneralButton from '../components/general/GButton';
import { Container, Box, Typography } from '@mui/material';

function Error() {
    return (
        <Container>
            <Box>
                <Typography variant='h4'>
                    Error
                </Typography>
                <Typography variant='body1'>
                    Error, return to home page.
                </Typography>
                <Container>
                    <Box>
                        <Box>
                            <GeneralButton label='Home' onClick={() => {window.location.href='/'}}>
                                Home
                            </GeneralButton>
                        </Box>
                        <Box>
                            <GeneralButton label='Home' onClick={() => {window.location.href='/contact'}}>
                                Contact
                            </GeneralButton>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
}

export default Error;