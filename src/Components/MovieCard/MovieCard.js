import React from 'react';
import img from './TheLittleThingsposter.jpg';
import './MovieCard.css'


function MovieCard (){
    return(
        <div>
            <div className='posterStyle'>
                <img src={img} alt="Movie" style={{width:'500px'}} /></div>
            <h3>Titre du film</h3>
            <span>Year of release</span><span>Movie Type</span>
            <span>Rating un span pr le moment</span>
            <p>Movie description</p>
        </div>
    )
    }
    export default MovieCard;