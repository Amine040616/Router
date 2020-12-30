import React from 'react';
import'./MovieCard.css';
import Rating from '../Rating'

function openTrailer(alpha){
    window.open(
        alpha,'_blank'
    )
}


function MovieCard ({movie:{trailer, id, name, image, type, date, rating, description, details}}){
    
    return(
        <div className="wrapper" id={id}>
            
            <div className="card">
                <img src={image} alt={name} className="cardimg" />
                <div className="descriptions">
                    <div>
                        <div className='categYear'>
                            <span>{type}</span>
                            <span>{date}</span>
                        </div>
                            <h1>{name}</h1>
                            <Rating rating={rating}/>
                            <p>{description}</p>
                            <a href={details} target='_blank' rel="noreferrer">Read more...</a>
                    </div>
                    <button onClick={()=>openTrailer(trailer)}>
                        <i className="fab fa-youtube"></i>
                        <span>Play trailer</span>
                    </button>
                </div>
            </div>
    </div>
    )
    }
    export default MovieCard;