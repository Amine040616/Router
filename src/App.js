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


  function addNewMovie(){
    setmovieLista()
  }
  

  return (
    <div className="App App-header">
        
        <SearchMovie setSearchName={setSearchName} setRatingSearch={setRatingSearch} ratingSearch={ratingSearch} />
        <MovieList movieLista={movieLista} searchName={searchName} ratingSearch={ratingSearch} />
        <AddMovie addNewMovie={addNewMovie} />
    </div>
  );
}

export default App;
