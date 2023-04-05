import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const mainBox = {
    display: "flex",
    alignItems: "center",
    marginRight: "0.5rem",
    justifyContent: 'space-between',
    gap: '1rem'
};

const SocialIcons = () => {
    return (
        <Box sx={mainBox}>
            <Link href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <FaWhatsapp fontSize="2.5rem" />
                </IconButton>
            </Link>
            <Link href="mailto:rabiighais@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <FaEnvelope fontSize="2.5rem" />
                </IconButton>
            </Link>
        </Box>
    );
};

export default SocialIcons;
