import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Box,
    Grid,
    Paper,
    IconButton,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox, TitleSubtitle } from '../../../ContainerAndBox'
import Cards from './Cards/Cards'


const useStyles = makeStyles((theme) => ({

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



const LatestReads = () => {
    const classes = useStyles()

    return (
        <Box>
            <PaddedBox>
                <MyContainer >
                    <TitleSubtitle title="Latest reads from blog" subtitle="See what we're up to on a rainy night" />
                    <Cards/>
                    {/* <Grid container spacing={3}>
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
                        </Grid> */}
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box >
    )
}

export default LatestReads
