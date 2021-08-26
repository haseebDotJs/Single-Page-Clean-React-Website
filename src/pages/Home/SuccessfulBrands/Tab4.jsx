import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
} from '@material-ui/core';
import cx from "classnames"
import girl from '../../../images/girl.jpg'


const useStyles = makeStyles((theme) => ({
    chair: {
        height: 180
    },
    cycle: {
        height: 280
    },
    girl: {
        height: 280,
    }
})
);
const Tab4 = ({styling}) => {
    const classes = useStyles()
    const { row, column, firstColumn, lastColumn, img } = styling

    return (
        <Box className={row}>
            <Box className={cx(column, firstColumn)}>
                <img className={cx(img, classes.chair)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/willian-justen-de-vasconcellos-550613-unsplash-1-1.jpg"} alt="chair"/>
            </Box>
            <Box className={column}>
                <img className={cx(img, classes.cycle)} src={"https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/g83y6do219w.jpg"} alt="cycle"/>
            </Box>
            <Box className={cx(column, lastColumn)}>
                <img className={cx(img, classes.girl)} src={girl} alt="girl"/>
            </Box>
        </Box>
    )
}

export default Tab4
