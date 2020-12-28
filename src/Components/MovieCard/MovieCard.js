import React from 'react';
import'./MovieCard.css'
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
                            <span className='categYear'>starz/rating</span>
                            <p>{movie.description}</p>
                            <a href='https://www.imdb.com/title/tt6146586/'>Read more...</a>
                    </div>
                    <button>
                        <i className="fab fa-youtube"></i>
                        Play trailer on YouTube
                    </button>
                </div>
            </div>{/*
            <div className="card">
                <img src="https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg" alt='Equalizer 2' />
                <div className="descriptions">
                <div>
                    <div className='categYear'>
                        <span>Categories</span>
                        <span>Year</span>
                    </div>
                    <h1>The Mandalorian</h1>
                    <span className='categYear'>starz/rating</span>
                    <p>
                    If you have a problem and there is nowhere else to turn, the mysterious and elusive Robert McCall will deliver the vigilante justice you seek. </p>
                    <a href='https://www.imdb.com/title/tt3766354/'>Read more...</a>
                    </div>
                    <button>
                        <i className="fab fa-youtube"></i>
                    Play trailer on YouTube
                    </button>
                </div>
            </div> */}
    </div>
    )
    }
    export default MovieCard;