import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Modal, Backdrop, Fade } from "@material-ui/core"
// import { MyContainer } from "../../../ContainerAndBox"

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute'
    },
    modal: {
        position: "relative",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        }
    },
    videoContainer: {
        outline: "none",
        width: "100%",
        maxWidth: 1100,
        height: "100%",
        maxHeight: 600,
        [theme.breakpoints.down("md")]: {
            maxHeight: 400,
            maxWidth: 600,
        }
    },
    video: {
        border: "none",
        width: "100%",
        height: "100%"
    }
}));

export default function TransitionsModal({ handleClose, open }) {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {/* <MyContainer> */}
                    <Box className={classes.videoContainer}>
                        <iframe className={classes.video} src="https://www.youtube.com/embed/7KIEvEODCI4" title="youtube video"></iframe>
                    </Box>
                    {/* </MyContainer> */}
                </Fade>
            </Modal>
        </Box>
    );
}