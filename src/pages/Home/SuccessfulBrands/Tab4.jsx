import React from 'react'
import {
    Box,
    Grid
} from '@material-ui/core';
import cx from "classnames"


const Tab4 = ({ styling }) => {
    const { firstColumn, lastColumn, bg, chair, cycle, girl } = styling

    return (
        <Box >
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box className={firstColumn}>
                        <Box className={cx(chair, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box >
                        <Box className={cx(cycle, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={lastColumn}>
                        <Box className={cx(girl, bg)} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Tab4
