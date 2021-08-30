// import React, { useState } from 'react'
import {
    Box,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox,TitleSubtitle } from '../../../ContainerAndBox'

import MyCarousel from './Carousel3'


const Reviews = () => {


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
