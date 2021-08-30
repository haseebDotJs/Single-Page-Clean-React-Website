import React from 'react'
import './Technique.css'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Button,
    Paper,
    IconButton,
    Divider,
    useMediaQuery
} from '@material-ui/core';
import { MyContainer, PaddedBox } from '../../../ContainerAndBox'
import cx from "classnames"
import WeekendIcon from '@material-ui/icons/Weekend';
import WatchIcon from '@material-ui/icons/Watch';
import TimerIcon from '@material-ui/icons/Timer';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: "160px",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        "&:hover": {
            border: "1px solid transparent",
            "& $icon": {
                fill: "white"
            },
            "& $menuButton": {
                backgroundColor: "rgba(138,135,224,.70)"
            },
            "& $subtitle2": {
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxHeight: `40px`
            },
            "& $subtitles": {
                color: 'white'
            },
            "& $learnMore": {
                display: "block"
            }
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(3)     
        }
    },
    firstPaper: {
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(0)
        }
    },
    lastPaper: {
        marginTop: theme.spacing(-3),
        marginBottom: 0,
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(0)
        }
    },
    menuButton: {
        marginBottom: theme.spacing(1)
    },
    icon: {
        marginBottom: theme.spacing(0)
    },
    // it is necessary to intitalize the styling class even empty to implement styling on it when hovering on some other element
    subtitles: {

    },
    subtitle1: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '16px',
    },
    subtitle2: {
        fontSize: '13px',
        marginBottom: theme.spacing(2),
        color: "gray",

    },
    learnMoreContainer: {
        display: "flex"
    },
    learnMore: {
        color: "white",
        fontWeight: 550,
        borderBottom: '2px solid white',
        display: "none"
    },
    creativePaper: {
        "&:hover": {
            background: "linear-gradient(90deg, rgba(106,103,203,1) 25%, rgba(65,61,169,1) 100%)",
            "& $creativeButton": {
                backgroundColor: "rgba(230, 230, 250, 0.5)"
            }
        }
    },
    creativeButton: {
        backgroundColor: "lavender",
    },
    creativeIcon: {
        fill: "slateblue",
    },
    featurePaper: {
        "&:hover": {
            background: "linear-gradient(90deg, rgba(255,84,84,1) 0%, rgba(222,54,24,1) 100%)",
            "& $featureButton": {
                backgroundColor: "rgba(250, 240, 230, 0.5)"
            }
        }
    },
    featureButton: {
        backgroundColor: "linen"
    },
    featureIcon: {
        fill: "orangered"
    },
    avantPaper: {
        "&:hover": {
            background: "linear-gradient(90deg, rgba(162,119,219,1) 0%, rgba(156,107,222,1) 100%)",
            "& $avantButton": {
                backgroundColor: "rgba(245, 245, 245, 0.5)"
            }
        }
    },
    avantButton: {
        backgroundColor: "whitesmoke"
    },
    avantIcon: {
        fill: "mediumpurple"
    },
    foxPaper: {
        "&:hover": {
            background: "linear-gradient(90deg, rgba(113,204,202,1) 0%, rgba(71,193,191,1) 100%)",
            "& $foxButton": {
                backgroundColor: "rgba(240, 248, 255, 0.5)"
            }
        }
    },
    foxButton: {
        backgroundColor: "aliceblue"
    },
    foxIcon: {
        fill: "mediumturquoise"
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    contentTitle: {
        fontSize: '2rem',
        fontWeight: 550,
        marginBottom: theme.spacing(2)
    },
    contentDescription: {
        color: "gray",
        marginBottom: theme.spacing(3),
        fontWeight: theme.typography.fontWeightRegular,
    },
    left: {
        marginRight: 0
    },
    button: {
        borderRadius: '50px',
        padding: '.75em 2em',
        maxWidth: '250px',
        backgroundColor: "whitesmoke",
        color: "slateblue",
        fontWeight: theme.typography.fontWeightBold,
        transition: "all .5s ease",
        "&:hover": {
            backgroundColor: "slateblue",
            color: "white"
        }
    }

})
);


const Techniques = () => {
    const classes = useStyles()

    const isMedium = useMediaQuery('(max-width:768px)')
    console.log("isMedium", isMedium);
    return (
        <Box>
            <PaddedBox>
                <MyContainer >
                    <Grid container justify="center" spacing={5} >
                        <Grid item container xs={12} lg={6} justify="center" spacing={isMedium ? 0 : 3} >
                            <Grid item xs={12} md={6} className={classes.left}>
                                <Paper variant="outlined" className={cx(classes.paper, classes.firstPaper, classes.creativePaper)}>
                                    <IconButton
                                        className={cx(classes.menuButton, classes.creativeButton)}
                                        aria-label="weekend icon"
                                        aria-controls="weekend icon"
                                        aria-haspopup="true"
                                    >
                                        <WeekendIcon className={cx(classes.icon, classes.creativeIcon)} />
                                    </IconButton>
                                    <Typography className={cx(classes.subtitle1, classes.subtitles)} variant="body1" >
                                        Super Creative
                                    </Typography>
                                    <Typography className={cx(classes.subtitle2, classes.subtitles)} variant="body1">
                                        Digital transformation describes an organisation making a fundamental change from its current state
                                    </Typography>
                                    <Box className={classes.learnMoreContainer}>
                                        <Typography className={classes.learnMore} variant="body2" >
                                            Learn More
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Paper variant="outlined" className={cx(classes.paper, classes.featurePaper)}>
                                    <IconButton
                                        className={cx(classes.menuButton, classes.featureButton)}
                                        aria-label="watch icon"
                                        aria-controls="watch icon"
                                        aria-haspopup="true"
                                    >
                                        <WatchIcon className={cx(classes.icon, classes.featureIcon,)} />
                                    </IconButton>
                                    <Typography className={cx(classes.subtitle1, classes.subtitles)} variant="subtitle1" >
                                        Feature-driven
                                    </Typography>
                                    <Typography className={cx(classes.subtitle2, classes.subtitles)} variant="subtitle2" color="textPrimary">
                                        It’s also a cultural change, a shift in mindset where the whole company supports a new way of thinking.                                    </Typography>
                                    <Box className={classes.learnMoreContainer}>
                                        <Typography className={classes.learnMore} variant="body2" color="textPrimary">
                                            Learn More
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.left}>
                                <Paper variant="outlined" className={cx(classes.paper, classes.avantPaper)}>
                                    <IconButton
                                        className={cx(classes.menuButton, classes.avantButton)}
                                        aria-label="timer icon"
                                        aria-controls="timer icon"
                                        aria-haspopup="true"
                                    >
                                        <TimerIcon className={cx(classes.icon, classes.avantIcon)} />
                                    </IconButton>
                                    <Typography className={cx(classes.subtitle1, classes.subtitles)} variant="subtitle1" >
                                        Avant Garde
                                    </Typography>
                                    <Typography className={cx(classes.subtitle2, classes.subtitles)} variant="subtitle2" color="textPrimary">
                                        We can change the way your business thinks and behaves long-term in order to combat the threat of digital disruption.
                                    </Typography>
                                    <Box className={classes.learnMoreContainer}>
                                        <Typography className={classes.learnMore} variant="body2" color="textPrimary">
                                            Learn More
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Paper variant="outlined" className={cx(classes.paper, classes.foxPaper, classes.lastPaper)}>
                                    <IconButton
                                        className={cx(classes.menuButton, classes.foxButton)}
                                        aria-label="localpizza icon"
                                        aria-controls="localpizza icon"
                                        aria-haspopup="true"
                                    >
                                        <LocalPizzaIcon className={cx(classes.icon, classes.foxIcon)} />
                                    </IconButton>
                                    <Typography className={cx(classes.subtitle1, classes.subtitles)} variant="subtitle1" >
                                        Fox in the Box
                                    </Typography>
                                    <Typography className={cx(classes.subtitle2, classes.subtitles)} variant="subtitle2" color="textPrimary">
                                        We will work with you as the business transforms into one that is efficient, customer-centric.                                    </Typography>
                                    <Box className={classes.learnMoreContainer}>
                                        <Typography className={classes.learnMore} variant="body2" color="textPrimary">
                                            Learn More
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid className={classes.contentContainer} item xs={12} lg={6} >
                            <Box >
                                <Typography className={classes.contentTitle} variant="h4">
                                    Build websites with webify.
                                    <br />
                                    Any niche. In minutes.
                                </Typography>
                                <Typography className={classes.contentDescription} variant="subtitle1" >
                                    Webify is the all-in-one WordPress theme to build a beautiful online presence for you. Our team discussed every single detail to make sure Webify is the most versatile and unique theme created so far.
                                </Typography>
                                <Typography className={classes.contentDescription} variant="subtitle1" >
                                    It’s more then a WordPress theme. It’s like a design tool that let’s you create websites of any niche, easily. Each and every block is created with AB testing and UX research. Take a look at all the pages and elements and see how beautiful your webiste will become. No coding required, ofcourse!
                                </Typography>
                                <Button className={classes.button} color="primary">
                                    Take 1-min Tour
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box>
    )
}

export default Techniques
