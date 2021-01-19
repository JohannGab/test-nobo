import styled from 'styled-components';

export const StyledHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const Image = styled.img`
    max-width: 100%;
`

export const Container = styled.div`
    position: absolute;
    text-align: center;
    font-weight: bold;
    bottom: 28rem;
    @media screen and (max-width: 640px) {
        bottom: 35rem;
    }
`

export const TextTitle = styled.h2`
    font-size: 5rem;
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
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