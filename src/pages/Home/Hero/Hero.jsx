import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Button,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox } from '../../../ContainerAndBox'


const useStyles = makeStyles((theme) => ({
    heroImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: '3.75rem',
        fontWeight: 600,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            fontSize: '2.5rem',
        }
    },
    subtitle: {
        fontWeight: theme.typography.fontWeightRegular,
        marginBottom: theme.spacing(4),
    },
    button: {
        borderRadius: '50px',
        padding: '.75em 2em',
        marginBottom: theme.spacing(8),
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(5),
        }
    },
    images: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sponsors: {
        marginRight: theme.spacing(3)
    },
})
);

const sponsorImages = [
    {
        src: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/client4.png",
        NoLeftMargin: true
    },
    {
        src: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/client2.png",
    },
    {
        src: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/client1.png",
    },
    {
        src: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/client3.png",
        NoRightMargin: true
    },

]
const Hero = () => {
    const classes = useStyles()

    return (
        <Box>
            <PaddedBox >
                <MyContainer >
                    <Box >
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6} >
                                <Box className={classes.heroContent}>
                                    <Typography className={classes.title} variant="h1" >
                                        Build it Beautiful.
                                        <br />
                                        & Unparalleled.
                                    </Typography>
                                    <Typography className={classes.subtitle} variant="h6" color="textSecondary"  >
                                        Webify is the all-in-one WordPress theme to build
                                        a beautiful online presence for you.
                                    </Typography>
                                    <Button className={classes.button} variant="contained" color="primary">
                                        Take 1-min Tour
                                    </Button>
                                    <Box className={classes.images} >
                                        {sponsorImages.map(image => (
                                            // <Grid item xs={3}>
                                            <Box pl={image.NoLeftMargin ? 0 : 2} pr={image.NoRightMargin ? 0 : 2} key={image.src}>
                                                <img src={image.src} alt="sponsors" align="right" />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Box className={classes.heroImage}>
                                    <img src="https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/hero-img-1.png" alt="illustration" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box>
    )
}

export default Hero
