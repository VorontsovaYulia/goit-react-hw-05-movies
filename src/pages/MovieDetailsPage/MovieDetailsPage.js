import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "api";
import { Image, ImageBox, List, Wrapper, Link, ListStyled } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [, setLoading] = useState(false);
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
                <Wrapper>
                    <ImageBox>
                        <Image alt={movieDetails.title} src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} />
                    </ImageBox>
                    <div>
                    <h1>{movieDetails.title}</h1>
                    <p>User Scope: {Math.ceil(movieDetails.popularity)}%</p>
                    <h2>Overview</h2>
                    <p>{movieDetails.overview}</p>
                    <h3>Genres</h3>
                    <List>{movieDetails.genres.map(({ id, name }) => <li key={id}>{name}</li>)}</List>
                    </div>
                </Wrapper>
                <h3>Additional information</h3>

                <ListStyled>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ListStyled>
                <Outlet />
            </>
        }

            
        </div>
    );
};

export default MovieDetailsPage;