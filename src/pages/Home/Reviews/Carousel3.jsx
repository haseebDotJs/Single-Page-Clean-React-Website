// import React, { useState, useEffect } from "react"
import Carousel from 'react-material-ui-carousel';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Box,
    useMediaQuery
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    grid1: {
        [theme.breakpoints.down("sm")]: {
            order: 1
        }
    },
    carouselContainer: {
        border: "1px solid rgb(234,234,234)",

    },
    carousel: {
        width: "100%"
    },
    leftContainer: {
        margin: "auto",
        maxWidth: "80%",
        // paddingTop: theme.spacing(3),
        // paddingBottom: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 350,
    },
    title: {
        fontWeight: theme.typography.fontWeightRegular,
    },
    name: {
        fontWeight: theme.typography.fontWeightMedium
    },
    profession: {
        fontWeight: theme.typography.fontWeightLight
    },
    customerImageContainer: {
        height: 350,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("md")]: {
            height: 300
        }
    },

})
);
const items = [
    {
        id: "carousel1",
        logo: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/client2.png",
        title: "“Your testimonial page serves as a platform to show off how others have benefited from your product or service, making it a powerful tool.”",
        signature: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/signature.png",
        name: "Bob Mathews",
        profession: "System Engineer",
        image: "https://shopify-customerio.s3.amazonaws.com/tools/image_attachment/image/custom_resized_d9ba69b8-bcc2-4c3a-9cbb-c68fa2316610.png"
    },
    {
        id: "carousel2",
        logo: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/client3.png",
        title: "“Your testimonial page serves as a platform to show off how others have benefited from your product or service, making it a powerful tool.”",
        signature: "https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/signature.png",
        name: "Anna Robertson",
        profession: "Web Consultant",
        image: "https://shopify-customerio.s3.amazonaws.com/tools/image_attachment/image/custom_resized_9672eb77-60a8-433e-86ad-78ee67fba8c8.png"
    },
]

function Project({ item: { id, logo, signature, title, name, profession, image } }) {
    const classes = useStyles();


    return (
        <Box className={classes.carouselContainer} id={id}>
            <Grid container alignItems="center" justify="space-between">
                <Grid item xs={12} md={6} className={classes.grid1}>
                    <Box className={classes.leftContainer}>
                        <Box >
                            <Box mb={1}>
                                <img src={logo} alt="logo" />
                            </Box>
                            <Typography className={classes.title} variant="body1" color="textSecondary">
                                {title}
                            </Typography>
                        </Box>
                        <Box mt={5}>
                            <Box>
                                <img src={signature} alt="signature" />
                            </Box>
                            <Typography className={classes.name} variant="subtitle1">
                                {name}
                            </Typography>
                            <Typography className={classes.profession} variant="subtitle2">
                                {profession}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Box className={classes.customerImageContainer} style={{ backgroundImage: `url(${image})` }} />
                </Grid>
            </Grid>
        </Box>
    )
}


const MyCarousel3 = () => {
    const classes = useStyles()
    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box  className={classes.container}>
            <Carousel
                className={classes.carousel}
                autoPlay={false}
                animation="slide"
                indicators={isMedium ? true : false}
                navButtonsAlwaysInvisible={isMedium ? true : false}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        opacity: 0.5,
                    }
                }}
            >
                {
                    items.map((item, index) => {
                        return <Project item={item} key={index} />
                    })
                }
            </Carousel>
        </Box >
    )
}
export default MyCarousel3