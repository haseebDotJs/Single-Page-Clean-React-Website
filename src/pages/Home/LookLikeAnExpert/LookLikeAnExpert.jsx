// import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Button,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox } from '../../../ContainerAndBox'
import Carousel from './Carousel/Carousel'
const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 550,
        letterSpacing: '1px'
    },
    subInfo: {
        fontWeight: theme.typography.fontWeightLight,
        lineHeight: 1.6
    },
    button: {
        borderRadius: '50px',
        padding: '.75em 2em',
        maxWidth: '250px',
        backgroundColor: "whitesmoke",
        color: "slateblue",
        fontWeight: theme.typography.fontWeightBold,
        "&:hover": {
            backgroundColor: "slateblue",
            color: "white"
        }
    }

})
);

const LookLikeAnExpert = () => {
    const classes = useStyles()

    return (
        <Box >
            <PaddedBox>
                <MyContainer>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Carousel />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Box>
                                    <Box mb={2}>
                                        <Typography className={classes.title} variant="h4" >
                                            Look like an expert,
                                            <br />
                                            right from the start.
                                        </Typography>
                                    </Box>
                                    <Box mb={4}>
                                        <Typography className={classes.subInfo} variant="body1" color="textSecondary" gutterBottom>
                                            It’s more then a WordPress theme. It’s like a design tool that let’s you create websites of any niche, easily. Each and every block is created with AB testing and UX research. Take a look at all the pages and elements and see how beautiful your webiste will become. No coding required, ofcourse!
                                        </Typography>
                                    </Box>
                                    <Button className={classes.button} color="primary">
                                        Discover More
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box>
    )
}

export default LookLikeAnExpert
