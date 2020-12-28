import React from 'react';
import'./MovieCard.css';
import Rate from '../Rating'

function MovieCard ({movie}){
    return(
        <div className="wrapper" id={movie.id}>
            <div className="card">
                <img src={movie.image} alt={movie.name} />
                <div className="descriptions">
                    <div>
                        <div className='categYear'>
                            <span>{movie.type}</span>
                            <span>{movie.date}</span>
                        </div>
                            <h1>{movie.name}</h1>
                            <span><Rate /></span>
                            <p>{movie.description}</p>
                            <a href={movie.details}>Read more...</a>
                    </div>
                    <button>
                        <i className="fab fa-youtube"></i>
                        Play trailer on YouTube
                    </button>
                </div>
            </div>
    </div>
    )
    }
    export default MovieCard;