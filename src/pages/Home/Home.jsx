import React from 'react'
import { Box } from "@material-ui/core"
import Hero from './Hero/Hero'
import Techniques from './Techniques/Techniques'
import EveryNiche from './EveryNiche/EveryNiche'
import Reviews from './Reviews/Reviews'
import SuccessfulBrands from './SuccessfulBrands/SuccessfulBrands'
import LookLikeAnExpert from './LookLikeAnExpert/LookLikeAnExpert'
import FunFacts from './FunFacts/FunFacts'
import LatestReads from './LatestReads/LatestReads'
const Home = () => {
    return (
        <Box>
            <Hero />
            <Techniques />
            <EveryNiche />
            <Reviews />
            <SuccessfulBrands />
            <LookLikeAnExpert />
            <FunFacts />
            <LatestReads />
        </Box>
    )
}

export default Home
