import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Typography,
    Grid,
    Divider
} from '@material-ui/core';
import { MyContainer } from '../../../ContainerAndBox'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    head: {
        color: "rgb(112,112,112)",
        fontWeight: 450,
        marginBottom: theme.spacing(2),
        textTransform: "capitalize",
        fontSize: "14px"
    },
    text: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(2),
        color: "rgb(160,160,160)",
        textTransform: "capitalize",
        fontSize: "14px"
    },
    details: {
        display: "flex",
    },
    icon: {
        fontSize: "20px",
        marginRight: theme.spacing(1),
        fill: "rgb(160,160,160)",
    },
    formContainer: {
        display: "flex",
        alignItems: "center"
    },
    input: {
        padding: "15px",
        border: "none",
        outline: "none",
        fontSize: ".9rem",
        borderRadius: "4px 0px 0px 4px",
    },
    button: {
        marginLeft: 2,
        width: "50px",
        padding: "10px",
        border: "none",
        backgroundColor: "rgb(93,90,158)",
        color: "white",
        fontWeight: theme.typography.fontWeightBold,
        fontSize: ".9rem",
        borderRadius: "0px 4px 4px 0px",
        cursor: "pointer"
    },
    sendIcon: {
        fontSize: "22px",
        fill: "white"
    },
    section: {
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(3),
        }
    }
})
)





const MainPart = () => {
    const classes = useStyles()

    return (
        <Box>
            <MyContainer>
                <Box py={6}>
                    <Grid container>
                        <Grid item xs={12} md={3}>
                            <Box className={classes.section}>
                                <Typography className={classes.head} variant="body1" >
                                    resources
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    home
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    about
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    blog
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    contact
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box className={classes.section}>
                                <Typography className={classes.head} variant="body1" >
                                    company
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    product
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    FAQ
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    privacy policy
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    terms & conditions
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box className={classes.section}>
                                <Box >
                                    <Typography className={classes.head} variant="body1" >
                                        Contact Details
                                    </Typography>
                                </Box>
                                <Box className={classes.details}>
                                    <LocationOnIcon className={classes.icon} />
                                    <Typography className={classes.text} variant="body1" >
                                        221B Baker Street
                                    </Typography>
                                </Box>
                                <Box className={classes.details}>
                                    <PhoneEnabledIcon className={classes.icon} />
                                    <Typography className={classes.text} variant="body1">
                                        (372) 587-2335
                                    </Typography>
                                </Box>
                                <Box className={classes.details}>
                                    <QueryBuilderIcon className={classes.icon} />
                                    <Typography className={classes.text} variant="body1">
                                        11 a.m - 12 p.m
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box className={classes.section}>
                                <Box>
                                    <Typography className={classes.head} variant="body1">
                                        Sign up for Newsletter
                                    </Typography>
                                </Box>
                                <Box>
                                    <form>
                                        <Box className={classes.formContainer}>
                                            <input className={classes.input} type="email" name="email" placeholder="Email Address" required />
                                            <button className={classes.button} type="submit" name="subscribe"><SendIcon className={classes.sendIcon} /></button>
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </MyContainer>
            <Divider style={{ backgroundColor: "rgb(102,102,102)" }} />
        </Box>
    )
}

export default MainPart
