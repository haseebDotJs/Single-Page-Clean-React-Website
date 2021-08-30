import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tab1 from './Tab1'
import Tab2 from './Tab2.'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import Tab5 from './Tab5'
import girlPic from '../../../images/girl.jpg'

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
    firstColumn: {
        marginRight: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(4)
        }
    },
    lastColumn: {
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(0),
            marginTop: theme.spacing(4)
        }
    },
    mb: {
        marginBottom: theme.spacing(4)
    },
    bg: {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%"
    },
    chair: {
        height: 220,
        backgroundImage: `url(https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/willian-justen-de-vasconcellos-550613-unsplash-1-1.jpg)`,
    },
    leaf: {
        height: 320,
        backgroundImage: "url(https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/wbfvgbpdxfa.jpg)"
    },
    cycle: {
        height: 320,
        backgroundImage: "url(https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/g83y6do219w.jpg)"
    },
    watch: {
        height: 220,
        backgroundImage: "url(https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/p3fh6ya5evi.jpg)"
    },
    tile: {
        height: 220,
        backgroundImage: "url(https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/w6onivdcfn0.jpg)"
    },
    girl: {
        height: 320,
        backgroundImage: `url(${girlPic})`
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // this swipeable views is creating warning in log
    return (
        <Box className={classes.container}>
            <Tabs
                TabIndicatorProps={{ style: { background: '#fff' } }}
                value={value}
                onChange={handleChange}
                variant="scrollable" 
                style={{ marginBottom: '1rem' }}
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
                style={{ cursor: "e-resize", width: "100%" }}
            >
                <TabPanel value={value} index={0} dir={theme.direction} >
                    <Tab1 styling={{ firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, mb: classes.mb, bg: classes.bg, chair: classes.chair, leaf: classes.leaf, cycle: classes.cycle, watch: classes.watch, tile: classes.tile, girl: classes.girl }} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Tab2 styling={{ firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, mb: classes.mb, bg: classes.bg, chair: classes.chair, leaf: classes.leaf, cycle: classes.cycle, watch: classes.watch, tile: classes.tile, girl: classes.girl }} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Tab3 styling={{ firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, mb: classes.mb, bg: classes.bg, chair: classes.chair, leaf: classes.leaf, cycle: classes.cycle, watch: classes.watch, tile: classes.tile, girl: classes.girl }} />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Tab4 styling={{ firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, mb: classes.mb, bg: classes.bg, chair: classes.chair, leaf: classes.leaf, cycle: classes.cycle, watch: classes.watch, tile: classes.tile, girl: classes.girl }} />
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <Tab5 styling={{ firstColumn: classes.firstColumn, lastColumn: classes.lastColumn, mb: classes.mb, bg: classes.bg, chair: classes.chair, leaf: classes.leaf, cycle: classes.cycle, watch: classes.watch, tile: classes.tile, girl: classes.girl }} />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
