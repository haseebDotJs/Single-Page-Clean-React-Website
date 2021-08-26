import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginLeft: "auto",
        marginRight: "auto"
    },
    image: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        width: "100% ",
        height: 400,
        background: `url('https://media.istockphoto.com/photos/young-woman-working-on-a-laptop-picture-id613241758?b=1&k=6&m=613241758&s=170667a&w=0&h=Gq2HVTC7CfA0Fv0sPksbW3LWDkP4hDbHdOCSItLh5ok=')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down('sm')]: {
            height: 350
        },
    },
    // imageButton: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: theme.palette.common.white,
    // },
    // imageSrc: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     width: "100% !important",

    // },
    // imageBackdrop: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundColor: theme.palette.common.black,
    //     opacity: 0.25,
    //     // transition: theme.transitions.create('opacity'),
    // },
    // imageTitle: {
    //     position: 'relative',
    //     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    // },
    // imageMarked: {
    //     height: 3,
    //     width: 18,
    //     backgroundColor: theme.palette.common.white,
    //     position: 'absolute',
    //     bottom: -2,
    //     left: 'calc(50% - 9px)',
    //     // transition: theme.transitions.create('opacity'),
    // },
    playIcon: {
        fill: "white",
        fontSize: "3rem"
    }
}));

export default function ButtonImage({ handleOpen }) {
    const classes = useStyles();

    return (
        <Box mx="auto">
            <Box
                className={classes.image}
                mx="auto"
            >
                <IconButton
                    className={classes.playButton}
                    aria-label="play icon"
                    aria-controls="play"
                    aria-haspopup="true"
                    onClick={handleOpen}
                >
                    <PlayCircleFilledIcon className={classes.playIcon} />
                </IconButton>
            </Box>
        </Box>
    );
}
