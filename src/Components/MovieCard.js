import Card from 'react-bootstrap/Card';
import './css files/CardCss.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addToFav, removeFromFav } from '../Store/FavSlice'
import { useDispatch, useSelector } from 'react-redux';

import { useLanguage } from './Context/LanguageContext';

import { increment, decrement } from '../Store/CounterSlice';

const MovieCard = ({ movieItem }) => {

    const { language } = useLanguage();

    const getText = () => {
        return language === 'ar' ? arabicText : englishText;
    }

    const englishText = {

        btn: 'Explore'

    };

    const arabicText = {

        btn: 'استكشف'

    };



    const dispatch = useDispatch();
    const yourfav = useSelector((state) => state.favorites.favMovies);

    const isMovieInFavorites = yourfav.some((somefavMovie) => somefavMovie.id === movieItem.id);



    const handleToggleFavorite = () => {
        if (isMovieInFavorites) {
            dispatch(removeFromFav(movieItem.id));
            dispatch(decrement());

        } else {
            dispatch(addToFav(movieItem));
            dispatch(increment());
        }
    };

    const baseImageUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w500";

    const navigate = useNavigate();

    return (


        <>


            <Card className='col-lg-2  mx-1 my-1'>
                <Card.Img variant="top" src={`${baseImageUrl}${posterSize}${movieItem.poster_path}`} className='posterimg' />
                <Card.Body>
                    <Card.Title>{movieItem.original_title}</Card.Title>
                    <Card.Text>
                        {movieItem.release_date}
                    </Card.Text>
                </Card.Body>
                <button className='details' onClick={() => navigate(`/MovieDetails/${movieItem.id}`)}>{getText().btn}</button>
                <Card.Footer className='foot mt-3'>
                    <small className="text-muted">{movieItem.vote_average}</small>


                    <button className='fav' onClick={handleToggleFavorite}>
                        {isMovieInFavorites ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                    </button>
                </Card.Footer>

            </Card>

        </>

    )
}


export default MovieCard;