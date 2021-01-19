import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoboMovieSearch from '../Components/noboMovieSearch';
import NoboMovieDetails from '../Components/noboMovieDetails';

function App() {

const [getData, setGetData] = useState([])
const [openAndClose, setOpenAndClose] = useState(true)
const [detail, setDetail] = useState([])

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

const activatOpenAndClose = (data) => {
    setOpenAndClose(!openAndClose)
    setDetail(data)
}

return (
    <>
        {openAndClose 
            ?   <NoboMovieSearch 
                    getData={getData}
                    activatOpenAndClose={activatOpenAndClose}
                />
            :   <NoboMovieDetails
                    detail={detail}
                    activatOpenAndClose={activatOpenAndClose} 
                />
        }
    
    </>
);
}

export default App;
