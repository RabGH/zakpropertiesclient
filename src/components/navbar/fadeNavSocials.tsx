import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useScrollTrigger } from "@mui/material";

const mainBox = {
    display: "flex",
    alignItems: "center",
    marginRight: "0.5rem",
    justifyContent: "space-between",
    gap: "1rem",
};

const FadeNavSocials = () => {
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
                ...mainBox,
                opacity: visible ? 1 : 0,
                transition: "all 0.3s ease-out",
            }}
        >
            <Link
                href="https://api.whatsapp.com/send?phone=123456789"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton>
                    <FaWhatsapp fontSize="2.5rem" />
                </IconButton>
            </Link>
            <Link
                href="mailto:rabiighais@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton>
                    <FaEnvelope fontSize="2.5rem" />
                </IconButton>
            </Link>
        </Box>
    );
};

export default FadeNavSocials;
