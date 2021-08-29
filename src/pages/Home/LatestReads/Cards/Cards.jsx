import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'
import CardImage1 from '../../../../images/CardImage1.jpg'
import CardImage2 from '../../../../images/CardImage2.jpg'
import CardImage3 from '../../../../images/CardImage3.jpg'

const useStyles = makeStyles((theme) => ({
    card: {
        overflow: "hidden",
        transition: "all 0.3s ease-out",
        "&:hover": {
            cursor: "default",
            boxShadow: "0px 14px 15px -10px rgba(0,0,0,0.3)",
            transform: "translate(0,-.8rem)",
        },
    },
    media: {
        height: 240,
        transition: "all .2s ease-in-out", /* Animation */
        backgroundSize: "100%",
        "&:hover": {
            backgroundSize: "105%"
        }
    },
    title: {
        color: "rgb(154,162,218)",
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: 1,
        fontSize: '.85rem'
    },
    subtitle: {
        fontWeight: 550,
        color: "black",
        lineHeight: 1.5
    },
    endTitle: {
        fontSize: '.85rem',
        fontWeight: theme.typography.fontWeightLight,
        color: "gray"
    }
}));


const cardItem = [
    {
        image: CardImage1,
        imageTitle: "Corporate Lifestyle",
        title: "Lifestyle",
        subtitle: "The Thin Blur Line Between Corporate Lifestyle & Other Things",
        endingTitle: "David Beck - April 15, 2019"
    },
    {
        image: CardImage2,
        imageTitle: "Coding",
        title: "Lifestyle",
        subtitle: "Halfway Though a Decade & More",
        endingTitle: "David Beck - April 15, 2019"
    },
    {
        image: CardImage3,
        imageTitle: "Balanced Life",
        title: "Lifestyle",
        subtitle: "How to Live a Balanced Life like Everyone",
        endingTitle: "David Beck - April 15, 2019"
    }
]

const Cards = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={4}>
            {
                cardItem.map(item => (
                    <Grid item xs={12} md={4} key={item.subtitle}>
                        <Card className={classes.card} variant="outlined">
                            <CardActionArea >
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title={item.imageTitle}
                                />
                                <CardContent style={{ minHeight: "80px" }}>
                                    <Typography variant="body1" className={classes.title}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" className={classes.subtitle}>
                                        {item.subtitle}
                                    </Typography>

                                </CardContent>
                                <CardActions style={{ marginLeft: 8 }}>
                                    <Typography variant="body1" className={classes.endTitle}>
                                        {item.endingTitle}
                                    </Typography>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>

    );
}
export default Cards