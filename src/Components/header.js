import React from 'react';

import {StyledHeader, Container, TextTitle, Subtitle } from './header.style'

const Header = ({ Title }) => {
    return (
        <StyledHeader>
            <Container>
                <TextTitle>🎬 NoboMovie 🎬</TextTitle>
                <Subtitle>{Title}</Subtitle>
            </Container>
        </StyledHeader>
    )
}

export default Header