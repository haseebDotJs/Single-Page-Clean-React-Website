import React from 'react'
import {
    Box,
    Grid
} from '@material-ui/core';
import cx from "classnames"

const Tab5 = ({ styling }) => {
    const { firstColumn, lastColumn, chair, tile, leaf, bg } = styling


    return (
        <Box >
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box className={firstColumn}>
                        <Box className={cx(chair, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Box className={cx(tile, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={lastColumn}>
                        <Box className={cx(leaf, bg)} />
                    </Box>
                </Grid>
            </Grid>


        </Box>
    )
}

export default Tab5
