import React from 'react';
import { StyledFooter, Image, Container, Text } from './footer.style'
import videoProduction from '../Images/video-production.min.jpg'

const Footer = () => {
    return (
        <StyledFooter>
            <Image src={videoProduction} alt='video production' />
            <Container>
                <Text>Merci de votre visite !</Text>
            </Container>
        </StyledFooter>
    )
}

export default Footer