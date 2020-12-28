import React from 'react';
import'./MovieCard.css'
function MovieCard (){
    return(
        <div className="wrapper">
        <div className="card">
            <img src="https://m.media-amazon.com/images/M/MV5BOTc1MjA2NjMxOF5BMl5BanBnXkFtZTgwOTYxNzMyNDM@._V1_.jpg" alt='John Wick 3' />
            <div className="descriptions">
                <div>
                    <div className='categYear'>
                        <span>Categories</span>
                        <span>Year</span>
                    </div>
                        <h1>John Wick 3</h1>
                        <span className='categYear'>starz/rating</span>
                        <p>
                            After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. 
                        </p>
                        <a href='https://www.imdb.com/title/tt6146586/'>Read more...</a>
                </div>
                <button>
                    <i className="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
            </div>
        </div>
        <div className="card">
            <img src="https://media2.firstshowing.net/firstshowing/img11/MonstersofManPosternewbigimg591.jpg" alt='Equalizer 2' />
            <div className="descriptions">
            <div>
                <div className='categYear'>
                    <span>Categories</span>
                    <span>Year</span>
                </div>
                <h1>Equalizer 2</h1>
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
        </div>
    </div>
    )
    }
    export default MovieCard;