import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    IconButton,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox, TitleSubtitle } from '../../../ContainerAndBox'
// import cx from "classnames"
import TransitionsModal from './Modal';
// import ButtonImage from './ButtonImage'
import ButtonImage2 from './ButtonImage2'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LayersIcon from '@material-ui/icons/Layers';

const useStyles = makeStyles((theme) => ({

    title: {
        fontWeight: 550
    },
    descriptionHead: {
        fontWeight: 550,
        fontSize: "16px"
    },
    descriptionBody: {
        fontWeight: theme.typography.fontWeightRegular,
        marginBottom: theme.spacing(2),
        fontSize: "14px",
        color: "gray",
    },
    button1: {
        backgroundColor: "rgb(229,241,250)",
        marginBottom: theme.spacing(1),
        "&:hover": {
            backgroundColor: "rgb(229,241,250)",
        },
    },
    icon1: {
        fill: "dodgerblue"
    },
    button2: {
        backgroundColor: "honeydew",
        marginBottom: theme.spacing(1),
        "&:hover": {
            backgroundColor: "honeydew",
        }
    },
    icon2: {
        fill: "limegreen"
    }
})
);

const EveryNiche = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <PaddedBox>
                <MyContainer>
                    <Box >
                        <TitleSubtitle title="A product for every niche" subtitle="Doesn’t matter what nich you’re after – Webify has it all." />
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={7}>
                                <Box >
                                    <ButtonImage2 handleOpen={handleOpen} />
                                    <TransitionsModal handleOpen={handleOpen} handleClose={handleClose} open={open} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Box mb={4}>
                                    <IconButton
                                        className={classes.button1}
                                        aria-label="localmall icon"
                                        aria-controls="localmall icon"
                                        aria-haspopup="true"
                                    >
                                        <LocalMallIcon className={classes.icon1} />
                                    </IconButton>
                                    <Typography className={classes.descriptionHead} variant="body1" >
                                        Super Creative
                                    </Typography>
                                    <Typography className={classes.descriptionBody} variant="body1">
                                        Our award-winning templates are the most beautiful way to present your ideas online. Stand out with a professional website, portfolio, or online store.
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton
                                        className={classes.button2}
                                        aria-label="localmall icon"
                                        aria-controls="localmall icon"
                                        aria-haspopup="true"
                                    >
                                        <LayersIcon className={classes.icon2} />
                                    </IconButton>
                                    <Typography className={classes.descriptionHead} variant="subtitle1" >
                                        Design-driven
                                    </Typography>
                                    <Typography className={classes.descriptionBody} variant="subtitle2">
                                        Trusted by the world’s best, Squarespace empowers people with creative ideas to succeed. Every block is designed and coded with huge attention to details.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box >
    )
}

export default EveryNiche
