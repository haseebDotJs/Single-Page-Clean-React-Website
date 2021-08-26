import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
} from '@material-ui/core';
import cx from "classnames"


const useStyles = makeStyles((theme) => ({
    leaf: {
        height: 280
    },
    cycle: {
        height: 280
    },
    tile: {
        height: 180
    }
})
);
const Tab3 = ({styling}) => {
    const classes = useStyles()
    const { row, column, firstColumn, lastColumn, img } = styling

    return (
        <Box className={row}>
            <Box className={cx(column, firstColumn)}>
                <img className={cx(img, classes.cycle)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/g83y6do219w.jpg"} alt="cycle"/>
            </Box>
            <Box className={column}>
                <img className={cx(img, classes.tile)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/w6onivdcfn0.jpg"} alt="tile"/>
            </Box>
            <Box className={cx(column, lastColumn)}>
                <img className={cx(img, classes.leaf)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/wbfvgbpdxfa.jpg"} alt="leaf"/>
            </Box>
        </Box>
    )
}

export default Tab3
