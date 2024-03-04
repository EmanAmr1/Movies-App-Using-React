import { useDispatch, useSelector } from 'react-redux';
import { removeFromFav } from '../Store/FavSlice'
import Card from 'react-bootstrap/Card';
import {  decrement } from '../Store/CounterSlice';
import nofav from '../imges/nofav.PNG'

const WatchList = () => {

    const baseImageUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w500";

    const dispatch = useDispatch();
    const yourfav = useSelector((state) => state.favorites.favMovies);
    const favCount = useSelector((state) => state.counter.count);
    const handleRemoveFromFavorites = (movieId) => {
        dispatch(removeFromFav(movieId));
        dispatch(decrement());
    };

    return (


        <>
            <div>
                
                <div className="mt-5 d-flex flex-md-row flex-lg-row  col-lg-12  flex-column flex-wrap justify-content-center" >
                {favCount === 0 ? (
                    <>
            
            <img className='nofav' src={nofav} alt='' />
            </>
          ) : (
                    
                    yourfav.map((movie) => (
                        <div key={movie.id}>

                            <Card className='col-lg-12  mx-1 my-1'>
                                <Card.Img variant="top" src={`${baseImageUrl}${posterSize}${movie.poster_path}`} className='posterimg' />
                                <Card.Body>
                                    <Card.Title>{movie.original_title}</Card.Title>
                                    <Card.Text>
                                        {movie.release_date}
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className='foot mt-3'>
                                    <small className="text-muted">{movie.vote_average}</small>

                                    <button className='fav' onClick={() => handleRemoveFromFavorites(movie.id)}>
                                        <i className="fa-solid fa-heart"></i>
                                    </button>

                                </Card.Footer>

                            </Card>







                        </div>
                    )))}  
            </div>)

            </div>

        </>

    )

}


export default WatchList;