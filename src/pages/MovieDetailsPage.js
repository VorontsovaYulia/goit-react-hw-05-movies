import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "api";

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [ , setLoading] = useState(false);
    const { movieId } = useParams();
    

    useEffect(() => {
        async function getMovieId() {
            try {
                setLoading(true);
                const movie = await fetchMoviesById(movieId);
                setMovieDetails(movie);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getMovieId();
    }, [movieId]);
    
    return (
        <div>{
            movieDetails && <>
            <div>
                <img alt={movieDetails.title} width="200" src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} />
                <h2>{movieDetails.title}</h2>
                <p>User Scope : {Math.ceil(movieDetails.popularity)} %</p>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
                <h4>Genres</h4>
                    <ul>{movieDetails.genres.map(({ id, name }) => <li key={id}>{name}</li> )}</ul>
            </div>
            <hr />
            <p>Additional information</p>

            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
                <Outlet />
                </>
        }

            
        </div>
    );
};

export default MovieDetailsPage;