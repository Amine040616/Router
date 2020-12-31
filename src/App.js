import React, { useState } from 'react';

import './App.css';
import { moviesData } from "./Components/MovieData";
import MovieList from './Components/MovieList';
import SearchMovie from'./Components/SearchMovie/SearchMovie';
import AddMovie from './Components/AddMovie/AddMovie'

function App() {
  const [movieLista, setmovieLista]=useState(moviesData);
  const [searchName, setSearchName]=useState('');
  const [ratingSearch,setRatingSearch]=useState(1);


  function addMovieJdid(event, newMovie){
    event.preventDefault();
    setmovieLista([...movieLista, newMovie]);
    console.log(newMovie.name)
  }
  

  return (
    <div className="App App-header">
        
        <SearchMovie setSearchName={setSearchName} setRatingSearch={setRatingSearch} ratingSearch={ratingSearch} />
        <MovieList movieLista={movieLista} searchName={searchName} ratingSearch={ratingSearch} />
        <AddMovie addMovieJdid={addMovieJdid} />
    </div>
  );
}

export default App;
