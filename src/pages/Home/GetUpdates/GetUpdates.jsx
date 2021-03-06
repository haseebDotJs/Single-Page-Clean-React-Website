import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Divider,
    Grid,
    Typography
} from '@material-ui/core';
import { MyContainer} from '../../../ContainerAndBox'
import updates from '../../../images/newsletter-img.png'

const useStyles = makeStyles((theme) => ({
    imgContainer: {
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            marginBottom: theme.spacing(3)
        }
    },
    formContainer: {
        display: "flex",
        alignItems: "center"
    },
    input: {
        minWidth: "30px",
        padding: "15px",
        border: "none",
        outline: "none",
        fontSize: ".9rem",
        borderRadius: "4px 0px 0px 4px",
    },
    button: { 
        minWidth: "200px",
        padding: "15px 25px",
        border: "none",
        backgroundColor: "rgb(80,184,60)",
        color: "white",
        fontWeight: theme.typography.fontWeightBold,
        fontSize: ".9rem",
        borderRadius: "0px 4px 4px 0px",
        cursor: "pointer"
    }
})
)



const GetUpdates = () => {
    const classes = useStyles()

    return (
        <Box style={{ backgroundColor: "rgb(122,119,208)" }}>
            <MyContainer >
                <Box py={8}>
                    <Grid container alignItems="center" justify="center">
                        <Grid item xs={false} md={1} />
                        <Grid item xs={12} md={5}>
                            <Box className={classes.imgContainer}>
                                <img src={updates} alt="get updates" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box>
                                <Box mb={3}>
                                    <Typography style={{ fontWeight: 550, color: "white", fontSize: "2.325rem" }} variant="h4" gutterBottom>
                                        Get updates at your inbox, Whenever you want it.
                                    </Typography>
                                    <Typography style={{ color: "rgb(199,198,235)", fontSize: "1.125rem" }} variant="body1" color="textSecondary">
                                        News and updates of our product, people & more
                                    </Typography>
                                </Box>
                                <Box>
                                    <form>
                                        <Box className={classes.formContainer}>
                                            <input className={classes.input} type="email" name="email" placeholder="Email Address" required />
                                            <button className={classes.button} type="submit" name="subscribe">Subscribe Newsletter</button>
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={false} md={1} />
                    </Grid>
                </Box>
            </MyContainer>
            <Divider />
        </Box >
    )
}

export default GetUpdates
