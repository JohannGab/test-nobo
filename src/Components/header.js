import React from 'react';
import cinema from '../Images/cinema.min.jpg'

import {StyledHeader, Container,Image, TextTitle, Subtitle } from './header.style'

const Header = ({ Title }) => {
    return (
        <StyledHeader>
            <Image src={cinema} alt='cinema' />
            <Container>
                <TextTitle>🎬 NoboMovie 🎬</TextTitle>
                <Subtitle>{Title}</Subtitle>
            </Container>
        </StyledHeader>
    )
}

export default Header