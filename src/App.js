import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddMovie from './Components/AddMovie/AddMovie';
import DetailPage from './Components/DetailPage/DetailPage';
import './App.css';
import { moviesData } from "./Components/MovieData";
import MovieList from './Components/MovieList';
import SearchMovie from'./Components/SearchMovie/SearchMovie';




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
        
        
        <Router>
          <Switch>
          <Route path='/' exact >
          <SearchMovie setSearchName={setSearchName} setRatingSearch={setRatingSearch} ratingSearch={ratingSearch} />
            <MovieList movieLista={movieLista} searchName={searchName} ratingSearch={ratingSearch} />
            <AddMovie addMovieJdid={addMovieJdid} />
          </Route>
          <Route path='/detail/:movieId' component={DetailPage} />
          </Switch>
        </Router>
        
    </div>
  );
}


export default App;
