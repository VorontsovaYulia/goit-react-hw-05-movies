import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Image, ImageBox, List, Wrapper, LinkStyled, ListStyled } from "./MovieDetailsPage.styled";
import { fetchMoviesById } from "api";
import { ScaleLoader } from "react-spinners";

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    

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
        <div>
            <Link to={location.state?.from ?? '/movies'}>
                GO back
            </Link>
            {loading && <ScaleLoader color="orangered" />}
            {movieDetails && <>
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
                        <LinkStyled to="cast">Cast</LinkStyled>
                    </li>
                    <li>
                        <LinkStyled to="reviews">Reviews</LinkStyled>
                    </li>
                </ListStyled>
                <Outlet />
            </>
        }

            
        </div>
    );
};

export default MovieDetailsPage;