import styled from 'styled-components';

export const StyledDetail = styled.div`
    display: block;
    margin-bottom: 5rem;
`

export const TitleDetail = styled.h4`
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 2rem;
    @media screen and (max-width: 640px) {
        margin-left: 0;
    }
`
export const ContainerDetail = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 640px) {
        display: block;
        text-align: center;
    }
`

export const ImageMovie = styled.img``

export const ContainerSummary = styled.div`
    margin-left: 2rem;
    @media screen and (max-width: 640px) {
        margin: 0 1rem;
    }
`

export const TitleText = styled.h5``
export const Summary = styled.p``

export const Link = styled.a`
    text-decoration: none;
    &:visited{
        color: black;
    }
    &:hover {
        color: orangered;
    }
`

export const Text = styled.p`
`

export const OfficialSite = styled.p``

export const ContainerButton = styled.div`
    text-align: center;
    margin-top: 3rem;
`

export const Button = styled.button`
    text-align: center;
    padding: 1rem 2rem;
    box-shadow: 0 2px 2px #777;
    border-radius: 1rem;
    border: none;
    &:hover {
        background-color: #7773;
    }
`