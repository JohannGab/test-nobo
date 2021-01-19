import styled from 'styled-components';

export const StyledNoboMovieSearch = styled.div`
    text-align: center;
    margin: 5rem 0;
`
export const ContainerSearch = styled.div`
    display: block;
    justify-content: center;
`

export const TitleSearchPage = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    @media screen and (max-width: 640px) {
        font-size: 1.2rem; 
    }
`

export const ContainerInput = styled.div`
`

export const Input = styled.input`
    border-radius: 1rem;
    outline: none;
    border: solid 2px black;
    padding: 0.2rem 0.8rem;
    &:focus {
        background-color:  #7773;
    }
`
export const StyledDetails = styled.div`
    margin: 4rem 0;
    display: flex;
    justify-content: center;
`
export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50rem;
    border: solid 1px black;
    box-shadow: 0 35px 20px #777;
    &:hover {
        background-color: #7773;
    }
`
export const ImageMovie = styled.img``

export const ContainerDetailMovie = styled.div`
    margin-left: 2rem;
    text-align: start;
`


export const TitleMovie = styled.h4`
`

export const Premiered = styled.p`
    
`