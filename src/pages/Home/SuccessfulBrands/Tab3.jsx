import React from 'react'
import {
    Box,
    Grid
} from '@material-ui/core';
import cx from "classnames"

const Tab3 = ({ styling }) => {
    const { firstColumn, lastColumn, bg, cycle, tile, leaf } = styling

    return (
        <Box >
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box className={cx(firstColumn)}>
                        <Box className={cx(cycle, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box >
                        <Box className={cx(tile, bg)} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={cx(lastColumn)}>
                        <Box className={cx(leaf, bg)} />
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Tab3
