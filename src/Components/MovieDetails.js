import './css files/MovieDetailsCss.css'
import pay from '../imges/pay.png'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '../Store/FavSlice'

import { useLanguage } from './Context/LanguageContext';

const MovieDetails = () => {

    const [MovieDetails, setMovieDetails] = useState({})

    const yourfav = useSelector((state) => state.favorites.favMovies);
    const isMovieInFavorites = yourfav.some((somefavMovie) => somefavMovie.id === MovieDetails.id);
    const dispatch = useDispatch();
    const handleToggleFavorite = () => {
        // Check if the movie is already in the favorites


        if (isMovieInFavorites) {
            // If the movie is in favorites, remove it
            dispatch(removeFromFav(MovieDetails.id));

        } else {
            // If the movie is not in favorites, add it
            dispatch(addToFav(MovieDetails));

        }
    };



    const baseImageUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w500";

    const [searchParam, setSearchParam] = useSearchParams();

    const params = useParams();

    const { language } = useLanguage();

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=652295bcf9d29cae5a4e7d8c39b8fe1f&language=${language}`)
            .then((res) => setMovieDetails(res.data))
            .catch((err) => console.log(err));
    }, [params.id, language]);
    return (


        <>

            <div className='myallposter'>
                <div className='container'>
                    <div className='row'>

                        <div className='mt-5 d-flex flex-md-row flex-lg-row  col-lg-12  flex-column  justify-content-cente'>

                            <div className='col-lg-6  mx-1 my-1'>

                                <Card.Img src={`${baseImageUrl}${posterSize}${MovieDetails.poster_path}`} alt="Card image" className="poster" />
                            </div>
                            <div className=' det ms-5 col-lg-6  mx-1 my-1'>

                                <h1 >{MovieDetails.original_title}



                                    <button className='fav ms-5' onClick={handleToggleFavorite} >
                                        {isMovieInFavorites ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                                    </button>
                                </h1>

                                <p>{MovieDetails.release_date}</p>

                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                                <span className='ms-2'>{MovieDetails.vote_count}</span>

                                <p className='mt-5'>{MovieDetails.overview}</p>

                                <button>Action</button> <button>Crime</button> <button>Thrillir</button>
                                < div className='mt-3'>
                                    <span className='info'> Vote Avg : </span> <span>{MovieDetails.vote_average}</span>
                                    <span className=' ms-5 info'> Language:</span> <span>{MovieDetails.original_language}</span>
                                </div>

                                <div className='mt-5'>
                                    <img src={pay} alt='' />
                                </div>
                            </div>
                        </div>
                    </div >

                </div>



            </div>











        </>

    )

}


export default MovieDetails;