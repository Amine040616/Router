import React from 'react';
import MovieCard from './MovieCard/MovieCard'

function MovieList ({movieLista}){
    
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
            {movieLista
                .map((el,i) => (<MovieCard key={i} movie={el} />))}
        </div>
    );
}
export default MovieList;