import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid
} from '@material-ui/core';
import cx from "classnames"
import girl from '../../../images/girl.jpg'


const useStyles = makeStyles((theme) => ({
    chair: {
        height: 180
    },
    leaf: {
        height: 280
    },
    cycle: {
        height: 280
    },
    watch: {
        height: 180
    },
    tile: {
        height: 180
    },
    girl: {
        height: 280,
    }
})
);
const Tab1 = ({ styling }) => {
    const classes = useStyles()
    const { row, column, firstColumn, lastColumn, img } = styling
    console.log("styling", styling);
    return (
        <Grid container >
            <Grid item xs={12} md={4}>
                <Box className={cx(column, firstColumn)}>
                    <img className={cx(img, classes.chair)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/willian-justen-de-vasconcellos-550613-unsplash-1-1.jpg"} alt="chair" />
                    <img className={cx(img, classes.leaf)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/wbfvgbpdxfa.jpg"} alt="leaf" />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box className={column}>
                    <img className={cx(img, classes.cycle)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/g83y6do219w.jpg"} alt="cycle" />
                    <img className={cx(img, classes.watch)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/p3fh6ya5evi.jpg"} alt="watch" />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box className={cx(column, lastColumn)}>
                    <img className={cx(img, classes.tile)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/w6onivdcfn0.jpg"} alt="tile" />
                    <img className={cx(img, classes.girl)} src={girl} alt="girl" />
                </Box>
            </Grid>

        </Grid>
    )
}

export default Tab1
