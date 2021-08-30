import {
    Box,
    Divider
} from '@material-ui/core';
import { MyContainer, PaddedBox,TitleSubtitle } from '../../../ContainerAndBox'
import Tabs from './Tabs'


const SuccessfulBrands = () => {

 
    return (
        <Box >
            <PaddedBox>
                <MyContainer>
                    <TitleSubtitle title="Let our work do the talking" subtitle="Brands we've successfully made along the way" />
                    <Box>
                        <Tabs />
                    </Box>
                </MyContainer>
            </PaddedBox>
            <Divider />
        </Box>
    )
}

export default SuccessfulBrands
