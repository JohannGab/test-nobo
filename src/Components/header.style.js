import styled from 'styled-components';
import cinema from '../Images/cinema.min.jpg'

export const StyledHeader = styled.div`
    background-image: url(${cinema});
    display: flex;
    height: 50rem;
    justify-content: center;
`

export const Image = styled.img`
    max-width: 100%;
`

export const Container = styled.div`
    padding-top: 6rem;
`

export const TextTitle = styled.h2`
    font-size: 5rem;
`

export const Subtitle = styled.h4`
    font-size: 3rem;
    text-align: center;
`