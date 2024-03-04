import { useEffect, useState } from 'react';
import './css files/MovieListCss.css'
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import MovieCard from './MovieCard'
import { useLanguage } from './Context/LanguageContext';

const MovieList = () => {

    const apiKey = '652295bcf9d29cae5a4e7d8c39b8fe1f';

    const { language } = useLanguage();

    const [movies, setMovies] = useState([]);
    console.log(movies)


    const getText = () => {
        // Define the text based on the selected language
        return language === 'ar' ? arabicText : englishText;
      };


      const englishText = {
        Popular: 'Popular Movies',
        btn:'Explore'
       
      };
    
      const arabicText = {
        Popular: 'الافلام الاكثر شعبية ',
        btn:'استكشف'
        
      };


    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
              params: {
                api_key: apiKey,
                language: language,
              },
            });
    
            setMovies(response.data.results);
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
        };
    
        fetchMovies();
      }, [language, apiKey]);

   /* useEffect(() => {

        axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=652295bcf9d29cae5a4e7d8c39b8fe1f")
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));

    }, []);*/


    return (


        <>
            <div className="all">
                <h3 className=' mt-3 '>{getText().Popular}</h3>
                <div className="mt-5 d-flex flex-md-row flex-lg-row  col-lg-12  flex-column flex-wrap justify-content-center" >
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movieItem={movie}  Moviedetails={movie} />
                    ))}

                </div>
                <CardGroup>


                </CardGroup>









            </div>


        </>

    )

}


export default MovieList;