import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tab1 from './Tab1'
import Images2 from './Tab2.'
import Images3 from './Tab3'
import Images4 from './Tab4'
import Images5 from './Tab5'
import cx from "classnames"
import AppBar from '@material-ui/core/AppBar'
import FlipMove from 'react-flip-move';



const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
            style={{ margin: "auto" }}
        >
            {value === index && (
                <Box mx="auto" >
                    {children}
                </Box>
            )
            }
        </Box >
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        padding: "0",
        margin: "auto",
        width: "100%"
    },
    /* Create four equal columns that sits next to each other */
    column: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        flex: "31%",
        maxWidth: "100%",
        [theme.breakpoints.down("sm")]: {
            flex: "100%",
            maxWidth: "100%",
            marginRight: 'auto',
            marginLeft: 'auto'
        }
    },
    firstColumn: {
        marginLeft: 0,
    },
    lastColumn: {
        marginRight: 0
    },
    img: {
        marginTop: theme.spacing(4),
        verticalAlign: "middle",
        width: "100%",
        maxWidth: "400px",
        display: 'block',
        marginLeft: "auto",
        marginRight: "auto"
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <Box className={classes.container}>
            <Tabs
                TabIndicatorProps={{ style: { background: '#fff' } }}
                value={value}
                onChange={handleChange}
                variant='scrollable'
                style={{marginBottom: 1}}
            >
                <Tab label="All" {...a11yProps(0)} disableRipple={true} />
                <Tab label="Branding" {...a11yProps(1)} disableRipple={true} />
                <Tab label="Motion" {...a11yProps(2)} disableRipple={true} />
                <Tab label="Photography" {...a11yProps(3)} disableRipple={true} />
                <Tab label="UI/UX" {...a11yProps(4)} disableRipple={true} />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{cursor: "e-resize"}}
            >
                <TabPanel value={value} index={0} dir={theme.direction} style={{ overflowY: 'hidden' }}>
                    <Tab1 styling={{ row: classes.row, column: classes.column, firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, img: classes.img }} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Images2 styling={{ row: classes.row, column: classes.column, firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, img: classes.img }} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Images3 styling={{ row: classes.row, column: classes.column, firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, img: classes.img }} />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Images4 styling={{ row: classes.row, column: classes.column, firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, img: classes.img }} />
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <Images5 styling={{ row: classes.row, column: classes.column, firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, img: classes.img }} />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
