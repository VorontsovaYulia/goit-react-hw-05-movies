import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, Title } from "./HomePage.styled";
import { fetchMoviesTrending } from "api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        async function getMovies() {
            try {
                const popularMovies = await fetchMoviesTrending();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
            }
        };
        getMovies();
    }, []);

    return (
        <div>
            <Title>Trending today</Title>
            <List>
                {movies.results && movies.results.map(({ id, title, poster_path }) =>
                    <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                        <img alt={title} width="200" height="300" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                        <h3>{title}</h3>
                    </Link>)}
            </List>
        </div>
    );
};

export default HomePage;