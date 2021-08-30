import React from 'react'
import {
    Box,
    Typography
} from '@material-ui/core';
import StartingPart from "./StartingPart/StartingPart"
import MainPart from "./MainPart/MainPart"

const Footer = () => {

    return (
        <Box style={{ backgroundColor: "rgb(17,17,17)" }}>
            <StartingPart />
            <MainPart />
            <Box pt={4} pb={8}>
                <Typography variant="body1" style={{ color: "rgb(102,102,102)",fontSize: "14px" }} align="center">
                    © Built with pride and caffeine. All rights reserved.
                </Typography>
            </Box>
        </Box >
    )
}

export default Footer
