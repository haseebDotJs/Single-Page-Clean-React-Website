// import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    // IconButton,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox,TitleSubtitle } from '../../../ContainerAndBox'
// import cx from "classnames"

import MyCarousel from './Carousel3'

const useStyles = makeStyles(() => ({
    title: {
        fontWeight: 550
    },
})
);

const Reviews = () => {
    const classes = useStyles()


    return (
        <Box>
            <PaddedBox>
                <MyContainer>
                    <Box>
                        <TitleSubtitle title="But don’t take our work for it" subtitle="See what people have to say about our product"/>
                        <Box>
                            <MyCarousel />
                        </Box>
                    </Box>
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box >
    )
}

export default Reviews
