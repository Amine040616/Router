import React, {useState} from 'react';
import Rmodal from 'react-modal';
import Rating from '../Rating';
import "./AddMovie.css";
Rmodal.setAppElement('#root');
function AddMovie ({addMovieJdid}){
    const [isOpen, setIsOpen]=useState(false);
    const [name, setTitle]=useState('');
    const [rating, setRate]=useState('');
    const [type, setType]=useState('');
    const [image, setPoster]=useState('');
    const [details, setPage]=useState('');
    const [trailer, setTrailer]=useState('');
    const [date, setYear]=useState('');
    const [description, setSynopsis]=useState('');

    function addFilm(e){
        const newMovie = {
            name,
            image,
            rating,
            date,
            type,
            details,
            trailer,
            description
        }
        addMovieJdid(e, newMovie);
        setTitle('');
        setType('');
        setPoster('');
        setPage('');
        setTrailer('');
        setRate(0);
        setYear('');
        setSynopsis('');
        console.log(newMovie)
    }

    return(
        <>
            <div className='addMovie'>
                <button onClick={()=>setIsOpen(true)}><h1>+</h1></button>
            </div>
            
            <Rmodal className='modalo' isOpen={isOpen}>
            {/* <h1>Ajouter un film</h1> */}
            <form>
                <div className='deuxColumn'>
                    <label>Titre du film</label>
                    <input type='text' value={name} required placeholder='Ecrivez le titre du film a ajouter' onChange={(e)=>setTitle(e.target.value)} />
                    <label>Rate du film</label>
                    <Rating  rating={rating} setRatingSearch={setRate}/>
                    <label>Genre du film</label>
                    <input type='text'  value={type} required placeholder='Ecrivez le titre du film a ajouter'  onChange={(e)=>setType(e.target.value)} />
                    <label>Affiche du film</label>
                    <input type='url'  value={image} required placeholder="Mettez le lien de l'affiche"   onChange={(e)=>setPoster(e.target.value)} />
                    
                </div>
                <div className='deuxColumn'>
                    <label>Page du film (IMDB)</label>
                    <input type='url'  value={details} required placeholder="Mettez le lien de la page du film"   onChange={(e)=>setPage(e.target.value)} />
                    <label>Bande d'annonce du film</label>
                    <input type='url'  value={trailer} required placeholder="Mettez le lien de la Bande d'annonce"   onChange={(e)=>setTrailer(e.target.value)} />
                    <label>Année de sorti du film</label>
                    <input type='month'  value={date} required placeholder="Choisir l'année de sorti"   onChange={(e)=>setYear(e.target.value)} />
                    <label>Synobsis</label>
                    <textarea type='text'  value={description} required placeholder='Ajouter le synopsis du film a ajouter'   onChange={(e)=>setSynopsis(e.target.value)} />
                    <div className='deuxBouton'><button onClick={(e)=>addFilm(e)}>Add</button><button onClick={()=>setIsOpen(false)}>Cancel</button></div>
                </div>
            
            </form>
            </Rmodal>
        </>

    )
    }
    export default AddMovie;