import React from 'react'
import {
    Box,
    Grid
} from '@material-ui/core';
import cx from "classnames"

const Tab1 = ({ styling }) => {
    const { firstColumn, lastColumn, mb, bg, chair, leaf, cycle, watch, tile, girl } = styling
    return (
        <Box >
            <Grid container >
                <Grid item xs={12} md={4} >
                    <Box className={firstColumn}>
                        <Box className={cx(chair, bg, mb)} />
                        <Box className={cx(leaf, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Box >
                        <Box className={cx(cycle, bg, mb)} />
                        <Box className={cx(watch, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Box className={lastColumn} >
                        <Box className={cx(tile, bg, mb)} />
                        <Box className={cx(girl, bg)} />
                    </Box>
                </Grid>

            </Grid>
        </Box >
    )
}

export default Tab1
