import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoboMovieSearch from '../Pages/noboMovieSearch';
import NoboMovieDetails from '../Pages/noboMovieDetails';

function App() {

const [getData, setGetData] = useState([])
const [openAndClose, setOpenAndClose] = useState(true)

useEffect(() => {
    getDataMovie()
}, [])

const getDataMovie = () => {
    axios.get('https://api.tvmaze.com/search/shows?q=test')
    .then((response) => {
        // handle success
        const data = response.data
        setGetData(data)
    })
    .catch((error) => {
        // handle error
        console.log(error);
    })
}

const activatOpenAndClose = () => {
    setOpenAndClose(!openAndClose)
}

return (
    <>
        {openAndClose 
            ? <NoboMovieSearch getData={getData} activatOpenAndClose={activatOpenAndClose}/>
            : <NoboMovieDetails />
        }
    
    </>
);
}

export default App;
