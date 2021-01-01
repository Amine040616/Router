import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {moviesData} from '../MovieData';
import Rating from '../Rating'
import './DetailPage.css';


function openTrailer(alpha){
    window.open(
        alpha,'_blank'
    )
}

function DetailPage(){
    
    const {movieId} = useParams();
    const movie = moviesData.find(el => el.id == movieId);
    console.log(moviesData);
    return(
        // (!isLogin) ?  <Redirect to='/' />
        // :
        <div className='detailo' >
                <div className='deuxColumn'>
                    <img src={movie.image} alt={movie.name} className="cardimg" />
                </div>
                <div className='deuxColumn righto'>
                    <h1>{movie.name}</h1>
                    <div className='oneLine'>
                    <Rating  rating={movie.rating} />
                    <span>{movie.date}</span></div>
                    <p>{movie.description}</p>
                    <div className='deuxBouton'>
                        <button className='boutan' onClick={()=>openTrailer(movie.trailer)}>Watch trailer</button>
                        <Link  className='boutan' to='/'>
                        Back Home</Link>
                    </div>
                </div> 
        </div>
    )
}



export default DetailPage;