import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Typography,
    Button,
    Divider
} from '@material-ui/core';
import { MyContainer } from '../../../ContainerAndBox'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        }
    },
    text: {
        color: "rgb(158,158,158)",
        textAlign: "left",
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            marginBottom: theme.spacing(3)
        }
    },
    button: {
        textTransform: "capitalize",
        borderRadius: '50px',
        padding: '.75em 2em',
        maxWidth: '250px',
        backgroundColor: "white",
        color: "black",
        fontWeight: theme.typography.fontWeightBold,
        transition: "all .5s ease",
        "&:hover": {
            backgroundColor: "white",
            color: "gray"
        }
    }
})
)





const StartingPart = () => {
    const classes = useStyles()

    return (
        <Box>
            <MyContainer>
                <Box py={5}>
                    <Box className={classes.container}>
                        <Typography variant="body1" className={classes.text}>
                            Ready to revolutionize your website?
                        </Typography>
                        <Button className={classes.button} color="primary">
                            Discover More
                        </Button>
                    </Box>
                </Box>
            </MyContainer>
            <Divider style={{ backgroundColor: "rgb(102,102,102)" }} />
        </Box>
    )
}

export default StartingPart
