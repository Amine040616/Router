import React, { useState } from 'react';
import logo from './logoto.png';
import './App.css';
import { moviesData } from "./Components/MovieData";
import MovieList from './Components/MovieList';
import SearchMovie from'./Components/SearchMovie/SearchMovie';
import AddMovie from './Components/AddMovie/AddMovie'

function App() {
  //const [movieLista, setmovieLista]=useState({moviesData});
  

  return (
    <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchMovie />
        <MovieList movieLista={moviesData} />
        <AddMovie />
    </div>
  );
}

export default App;
