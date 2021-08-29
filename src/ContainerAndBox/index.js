import {
    Box, useMediaQuery, Container, Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';



const MyContainer = ({ children }) => {
    // const theme = useTheme()
    // const isMedium = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container maxWidth="lg">
            {children}
        </Container>
    )
}

const PaddedBox = ({ children }) => {
    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box pt={isMedium ? 6 : 10} pb={isMedium ? 8 : 12} >
            {children}
        </Box>
    )
}

const TitleSubtitle = ({ title, subtitle }) => {
    return (
        <Box mb={5}>
            <Typography style={{ fontWeight: 550,fontSize: "2.325rem" }} variant="h4" align="center" gutterBottom>
                {title}
            </Typography>
            <Typography style={{fontSize: "1.125rem"}}variant="body1" color="textSecondary" align="center">
                {subtitle}
            </Typography>
        </Box>
    )
}

export { MyContainer, PaddedBox, TitleSubtitle }
