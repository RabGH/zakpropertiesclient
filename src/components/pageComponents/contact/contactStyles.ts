import { Theme } from "@mui/material";
export const getContactStyles = (muiTheme: Theme) => {
    return {
        mainContainer: {
            display: "flex",
            flexDirection: "column",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            mt: "5rem",
        },
        titleBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mr: "15rem",
            width: "100%",
        },
        formBox: {
            maxWidth: "50%",
            padding: "0 24px",
        },
        buttonBox: {
            marginTop: "24px",
        },
        textField: {
            marginTop: "16px",
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: muiTheme.palette.secondary.dark,
                },
                "&:hover fieldset": {
                    borderColor: "#212121",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "#212121",
                },
            },
        },
        contactField: {
            width: "700px",
        },
        buttonStyles: {
            marginTop: "24px",
            fontWeight: "bold",
            "&:hover": {
                color: muiTheme.palette.secondary.dark,
            },
        },
        logoStyles: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "center",
        },
        contactGrid: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "32px",
            "@media screen and (max-width: 768px)": {
                gridTemplateColumns: "1fr",
                justifyContent: "center",
            },
        },
        imgGrid: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "100%",
            paddingRight: "24px",
            "@media screen and (max-width: 768px)": {
                justifyContent: "center",
                paddingRight: "0",
                marginTop: "24px",
            },
        },
    };
};
