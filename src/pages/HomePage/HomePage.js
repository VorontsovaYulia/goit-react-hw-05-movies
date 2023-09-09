import { fetchMoviesTrending } from "api";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List } from "./HomePage.styled";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true);
                const popularMovies = await fetchMoviesTrending();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <List>
                {movies.results && movies.results.map(({ id, title, poster_path }) =>
                    <Link key={id} to={`/movies/${id}`} state={{from: location}}>
                    <img alt={title} width="200" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                    <h3>{title}</h3>
                </Link>)}
            </List>
        </div>
    );
};

export default HomePage;