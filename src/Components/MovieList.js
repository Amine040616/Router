import React from 'react';
import MovieCard from './MovieCard/MovieCard'

function MovieList ({movieLista, searchName,ratingSearch}){
    
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',

            width: '98%'
        }}>
            {
            movieLista
            .filter(el=>el.name.includes(searchName) && el.rating>=ratingSearch)
            .map((el,i) => (<MovieCard key={i} movie={el} />))
            }
        </div>
    );
}
export default MovieList;