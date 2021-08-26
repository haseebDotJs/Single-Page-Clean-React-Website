import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const images = [
    {
        url: 'https://media.istockphoto.com/photos/young-woman-working-on-a-laptop-picture-id613241758?b=1&k=6&m=613241758&s=170667a&w=0&h=Gq2HVTC7CfA0Fv0sPksbW3LWDkP4hDbHdOCSItLh5ok=',
        width: '100%',
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginLeft: "auto",
        marginRight: "auto"
    },
    image: {
        position: 'relative',
        marginLeft: "auto",
        marginRight: "auto",
        width: "100% !important",
        height: 400,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 350
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginLeft: "auto",
        marginRight: "auto",
        width: "100% !important",

    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.25,
        // transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        // transition: theme.transitions.create('opacity'),
    },
    playIcon: {
        fill: "white",
        fontSize: "3rem"
    }
}));

export default function ButtonImage({ handleOpen }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {images.map((image) => (
                <Box
                    key={image.title}
                    className={classes.image}
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100% !important",
                    }}
                    mx="auto"
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${image.url})`,
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100% !important",
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Box className={classes.playContainer}>
                            <IconButton
                                className={classes.playButton}
                                aria-label="weekend icon"
                                aria-controls="weekend icon"
                                aria-haspopup="true"
                                onClick={handleOpen}
                            >
                                <PlayCircleFilledIcon className={classes.playIcon} />
                            </IconButton>
                        </Box>
                    </span>
                </Box>
            ))}
        </div>
    );
}
