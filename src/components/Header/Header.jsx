import React, { useRef, useState } from 'react';
import "./Header.css"
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Toolbar,
    Divider
} from '@material-ui/core';
import menuItems from './menuItems'
import logo from '../../images/logo.png'
import { MyContainer } from "../../ContainerAndBox"

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
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    menuMobileContainer: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    menuMobile: {
        transition: "all .5s ease-in-out",
        minHeight: 0,
        height: 0,
        overflowY: "hidden",
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,

    },
    menuItemsMobileContainer: {
        backgroundColor: "white",
    },
    menuItemsMobile: {
        fontWeight: theme.typography.fontWeightLight,
        fontSize: "14px",
        color: "black",
        cursor: "pointer"
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
    const menuMobile = useRef(null)
    const hamburger = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        if (!menuOpen) {
            hamburger.current.classList.add("open")
            setMenuOpen(true)
            menuMobile.current.style.minHeight = "100%"
        }
        else {
            hamburger.current.classList.remove("open")
            setMenuOpen(false)
            menuMobile.current.style.minHeight = "0"
        }
    };


    return (
        <Box className={classes.root}>
            <MyContainer>
                <Toolbar className={classes.toolbar} >
                    <Box className={classes.logoContainer}>
                        <img className={classes.logo} src={logo} alt="company logo" />
                    </Box>
                    <Box className={classes.menuItems}>
                        {menuItems.map(menuItem => {
                            const { menuTitle } = menuItem
                            return (
                                <Typography className={classes.item} variant="body2" color="textSecondary" key={menuTitle}>
                                    {menuTitle}
                                </Typography>)
                        })}
                    </Box>
                    <Box className={classes.menuMobileContainer}>
                        <Box
                            onClick={handleMenu}
                            className="menu-btn"
                            ref={hamburger}
                        >
                           
                            <div className="menu-btn-burger"   />
                        </Box>
                    </Box>
                </Toolbar>
            </MyContainer>
            <Box className={classes.menuMobile} ref={menuMobile} >
                <Divider />
                <MyContainer>
                    <Box py={2} className={classes.menuItemsMobileContainer}>
                        <Box style={{ display: "flex" }} mb={2}>
                            <Typography className={classes.menuItemsMobile} variant="body1">
                                Home
                            </Typography>
                        </Box>
                        <Box style={{ display: "flex" }} mb={2}>
                            <Typography className={classes.menuItemsMobile} variant="body1">
                                About
                            </Typography>
                        </Box>
                        <Box style={{ display: "flex" }} mb={2}>
                            <Typography className={classes.menuItemsMobile} variant="body1">
                                Blog
                            </Typography>
                        </Box>
                        <Box style={{ display: "flex" }}>
                            <Typography className={classes.menuItemsMobile} variant="body1" style={{ marginBottom: 0 }}>
                                Contact
                            </Typography>
                        </Box>
                    </Box>
                </MyContainer>
                <Divider />
            </Box>
        </Box>
    );
}