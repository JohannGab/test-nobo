import React, { useState, useEffect} from 'react';
import Header from '../Components/header'
import Footer from '../Components/footer';
import DefaultImage from '../Images/cinema-default.min.jpg'

import {
    StyledNoboMovieSearch,
    ContainerSearch,
    TitleSearchPage,
    ContainerInput,
    Input,
    StyledDetails,
    Container,
    ImageMovie,
    ContainerDetailMovie,
    TitleMovie,
    Premiered
} from './noboMovieSearch.style'

const NoboMovieSearch = ({ getData, activatOpenAndClose }) => {
const [filterDataMovie, setFilterDataMovie] = useState(getData)

useEffect(() => {
    setFilterDataMovie(getData)
},[getData])

console.log('filterDataMovie', filterDataMovie);

const searchData = ({ listName = [], value = '' }) => listName
    .filter(name => name.show.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)

const handleSearch = (value) => {
    try {
        const res = searchData({
            listName: getData,
            value
        })
        if (value) {
            setFilterDataMovie(res)
        } 
        else {
            return setFilterDataMovie(getData)
        }
        } catch(err) {
            return null
        }
    }

    return (
        <>
            <Header Title='Home' />
                <StyledNoboMovieSearch>
                    <ContainerSearch>
                        <TitleSearchPage>Recherchez votre film</TitleSearchPage>
                        <ContainerInput>
                            <Input  onChange={(e) => handleSearch(e.target.value)} ></Input>
                        </ContainerInput>
                    </ContainerSearch>
                    {filterDataMovie.map(res => 
                        <StyledDetails  key={res.show.id}>
                            <Container  onClick={() => activatOpenAndClose()}  >
                                {res.show.image !== null 
                                ?
                                    <ImageMovie 
                                        src= {res.show.image.medium}
                                        alt={`photo du film ${res.show.name}`}
                                    />
                                : 
                                    <ImageMovie 
                                        src= {DefaultImage}
                                        alt={`photo du film ${res.show.name}`}
                                        style={{width: 210}}
                                    />
                                }
                                <ContainerDetailMovie>
                                    <TitleMovie>{res.show.name}</TitleMovie>
                                    <Premiered>Date de sortie le {res.show.premiered}</Premiered>
                                </ContainerDetailMovie>
                            </Container>
                        </StyledDetails> 
                    )}
                </StyledNoboMovieSearch>
            <Footer />
        </>
    )
}

export default NoboMovieSearch