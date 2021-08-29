import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox, TitleSubtitle } from '../../../ContainerAndBox'
import Cards from './Cards/Cards'



const LatestReads = () => {

    return (
        <Box>
            <PaddedBox>
                <MyContainer >
                    <TitleSubtitle title="Latest reads from blog" subtitle="See what we're up to on a rainy night" />
                    <Cards />
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box >
    )
}

export default LatestReads
