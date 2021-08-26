import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { items } from "./Items/Items"
import {
    Typography,
    Box,
    Grid,
    Button,
    Paper,
    IconButton,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox, TitleSubtitle } from '../../../ContainerAndBox'
import DevicesIcon from '@material-ui/icons/Devices';
import cx from "classnames"


const useStyles = makeStyles((theme) => ({
    box: {
        backgroundImage: "url(https://webify-13e95.kxcdn.com/demo/webify/creative/wp-content/uploads/sites/8/2019/04/icon-box-bg.png)",
        backgroundPosition: "center 30px",
        backgroundRepeat: "no-repeat"
    },
    paper: {
        padding: theme.spacing(5, 4),
        cursor: "default",
        // position: "relative",
        // zIndex: 0,
        overflow: "hidden",
        transition: "all 0.3s ease-out",
        "&:hover": {
            boxShadow: "0px 14px 15px -10px rgba(0,0,0,0.3)",
            transform: "translate(0,-.8rem)",
        },

    },
    menuButton: {
        marginBottom: theme.spacing(1)
    },
    button: {
        backgroundColor: "lavender",
        "&:hover": {
            backgroundColor: "lavender",
        }
    },
    icon: {
        fill: "slateblue",
    },
    title1: {
        fontWeight: 550
    },
    title2: {
        fontWeight: 600
    },
    subtitle: {
        textTransform: "capitalize",
        color: "gray"
        // fontWeight: theme.typography.fontWeightLight
    }

})
)



const FunFacts = () => {
    const classes = useStyles()

    return (
        <Box>
            <Box className={classes.box}>
                <PaddedBox>
                    <MyContainer >
                        <TitleSubtitle title="Fun facts from workspace" subtitle="We’re hustlers, we get shit done no matter what" />
                        <Grid container spacing={3}>
                            {items.map(item => (
                                <Grid item xs={12} md={3} key={item.title}>
                                    <Paper variant="outlined" className={classes.paper}>
                                        <IconButton
                                            className={classes.button}
                                            aria-label="weekend icon"
                                            aria-controls="weekend icon"
                                            aria-haspopup="true"
                                        >
                                            <item.icon className={classes.icon} />
                                        </IconButton>
                                        <Box>
                                            <Typography variant="h2" className={classes.title2}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" className={classes.subtitle}>
                                                {item.subtitle}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </MyContainer>
                </PaddedBox>
            </Box>
            <Divider />
        </Box >
    )
}

export default FunFacts
