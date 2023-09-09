import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Image, ImageBox, List, Wrapper, LinkStyled, ListStyled } from "./MovieDetailsPage.styled";
import { fetchMoviesById } from "api";
import { ScaleLoader } from "react-spinners";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Suspense } from "react";

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? '/movies')
    

    useEffect(() => {
        if (!movieId) return;
        async function getMovieId() {
            try {
                const movie = await fetchMoviesById(movieId);
                setMovieDetails(movie);
            } catch (error) {
                console.log(error)
            }
        };
        getMovieId();
    }, [movieId]);
    
    return (
        <div>
            <Link to={backLinkLocation.current}>
                <BsArrowLeftSquareFill />GO back
            </Link>
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
                <Suspense fallback={<ScaleLoader color="orangered" />}>
                    <Outlet />
                </Suspense>
                
            </>
        }

            
        </div>
    );
};

export default MovieDetailsPage;