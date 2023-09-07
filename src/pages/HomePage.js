import { fetchMoviesTrending } from "api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

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
    },[]);

    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {movies.results && movies.results.map(({ id, title }) => <Link key={id} to={`/movies/${id}`}>{title}</Link>)}
            </ul>
        </div>
    );
};

export default HomePage;