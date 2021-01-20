import styled from 'styled-components';
import cinema from '../Images/cinema.min.jpg'
import cinemaMobile from '../Images/cinema.mobile.min.jpg'

export const StyledHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50rem;
    background-image: url(${cinema});
    @media screen and (max-width: 640px) {
        background-image: url(${cinemaMobile});
        height: 30rem;
        justify-content: flex-start;
        padding-top: 4rem;
    }
`

export const Container = styled.div`
    text-align: center;
    font-weight: bold;
`

export const TextTitle = styled.h2`
    font-size: 5rem;
    @media screen and (max-width: 640px) {
        font-size: 1.8rem;
    }
`

export const Subtitle = styled.h4`
    font-size: 3rem;
    text-align: center;
    margin-top: -3rem;
    @media screen and (max-width: 640px) {
        font-size: 1rem;
        margin-top: -1rem;
    }
`