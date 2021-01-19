import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    border-top: dotted 1px black;
    @media screen and (max-width: 640px) {
        display: block;
    }
`

export const Image = styled.img`
    width: 40rem;
    @media screen and (max-width: 640px) {
        width: 100%;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
`

export const Text = styled.p`
    font-size: 3rem;
    @media screen and (max-width: 640px) {
        font-size: 1rem; 
    }
`