// import React, { useState, useEffect } from "react"
import Carousel from 'react-material-ui-carousel';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Box,
    useMediaQuery
} from '@material-ui/core'
import image1 from '../../../../images/headphone_guy.jpg'
import image2 from '../../../../images/laptop_hand.jpg'
import image3 from '../../../../images/phone_watch.jpg'
import image4 from '../../../../images/writing.jpg'

const useStyles = makeStyles((theme) => ({

    carouselContainer: {
        border: "1px solid rgb(234,234,234)",
        borderRadius: '5px'
    },
    carousel: {
        width: "100%"
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
        borderRadius: '5px',
        [theme.breakpoints.down("md")]: {
            height: 300
        }
    }
})
);
const items = [
    {
        id: "image1",
        image: image1
    },
    {
        id: "image2",
        image: image2
    },
    {
        id: "image3",
        image: image3
    },
    {
        id: "image4",
        image: image4
    }
]

function Project({ item: { id, image } }) {
    const classes = useStyles();

    return (
        <Box className={classes.carouselContainer} id={id}>
            <Box className={classes.customerImageContainer} style={{ backgroundImage: `url(${image})` }} />
        </Box>
    )
}


const MyCarousel3 = () => {
    const classes = useStyles()
    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className={classes.container}>
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