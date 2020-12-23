import React, {useState} from 'react';
import logo from './logoto.png';
import './App.css';
import MovieList from './Components/MovieList';
import SearchMovie from'./Components/SearchMovie/SearchMovie';
import AddMovie from './Components/AddMovie/AddMovie'

function App() {
  return (
    <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchMovie />
        <MovieList />
        <AddMovie />
    </div>
  );
}

export default App;
