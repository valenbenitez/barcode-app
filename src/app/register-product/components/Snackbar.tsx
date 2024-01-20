import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({
    open,
    setOpen,
    title = "",
    severity = "",
}) {
    const isMobileScreen = useMediaQuery("(max-width:1199px)");
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
                anchorOrigin={{
                    vertical: isMobileScreen ? "top" : "bottom",
                    horizontal: isMobileScreen ? "center" : "left",
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity === "" ? "success" : "error"}
                    sx={{ width: "100%" }}
                >
                    {title === "" ? "¡Listo! Hemos guardado tus datos" : title}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
