import React from 'react';
import Rating from '../Rating';
import logo from '../../logoto.png';
import './SearchMovie.css'

function SearchMovie ({setSearchName, ratingSearch, setRatingSearch}){
    return(
        <div className='searchZone'>
            <img src={logo} className="App-logo" alt="logo" />
            <input placeholder='Ecrivez le titre du film à chercher' onChange={e=>setSearchName(e.target.value)} />
            <Rating setRatingSearch={setRatingSearch} rating={ratingSearch}/>
        </div>
    )
    }
    export default SearchMovie;