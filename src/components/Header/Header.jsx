import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    useMediaQuery,
    Container
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"
import { useNavigate } from 'react-router-dom'
import menuItems from './menuItems'
import logo from '../../images/logo.png'
import { CheckBox } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logoContainer: {
        flexGrow: 1,
    },
    logo: {
        width: "3rem",
        [theme.breakpoints.down("xs")]: {
            width: "2.5rem"
        }
    },
    toolbar: {
        padding: 0,
    },
    menuIcon: {
        fontSize: '2rem',
        cursor: "pointer"
    },
    menuItems: {
        display: "flex",
    },
    mobileMenuBar: {
        padding: 0,
        margin: 0
    },
    mobileMenuItems: {
        position: "relative"
    },
    item: {
        margin: '0 .5em',
        cursor: 'pointer',
        fontWeight: theme.typography.fontWeightLight,
        paddingLeft: theme.spacing(3),
        fontSize: '1rem',
        "&:hover": {
            color: "black",
        },
    },
}),
);

export default function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        setAnchorEl(null);
        navigate(pageURL)
    };
    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box className={classes.root}>
            <Container maxWidth="lg" className={classes.container}>
                <Toolbar className={classes.toolbar}>
                    <Box className={classes.logoContainer}>
                        <img className={classes.logo} src={logo} alt="company logo" />
                    </Box>
                    {isMedium ?
                        <Box >
                            <Box
                                onClick={handleMenu}
                            >
                                <MenuIcon className={classes.menuIcon} />
                            </Box>
                            < Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleMenuClick}
                                className={classes.mobileMenuBar}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem
                                    return (
                                        <MenuItem className={classes.mobileMenuItems} onClick={() => handleMenuClick(pageURL)} key={menuTitle}>{menuTitle}</MenuItem>
                                    )
                                })}
                            </Menu>
                        </Box>
                        :
                        <Box className={classes.menuItems}>
                            {menuItems.map(menuItem => {
                                const { menuTitle, pageURL } = menuItem
                                return (
                                    <Typography className={classes.item} variant="body2" color="textSecondary" onClick={() => handleMenuClick(pageURL)} key={menuTitle}>
                                        {menuTitle}
                                    </Typography>)
                            })}
                        </Box>
                    }
                </Toolbar>
            </Container>
        </Box>
    );
}