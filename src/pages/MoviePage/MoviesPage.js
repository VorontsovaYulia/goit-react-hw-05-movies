import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Image, InputBox, List, Title } from "./MoviePage.styled";
import { useEffect, useState } from "react";
import { fetchMovieSearch } from "api";
import noImage from "../NoImageAvailable.jpg"
import { ScaleLoader } from "react-spinners";

const MoviePage = () => {
    const [filterMovies, setFilterMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get('query') ?? "";
    const location = useLocation();

    useEffect(() => {
        async function getMoviesSearch() {
            try {
                setLoading(true);
                const movies = await fetchMovieSearch(querySearch);
                setFilterMovies(movies);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getMoviesSearch();
    }, [querySearch]);

    const updateQueryString = (evt) => {
        evt.preventDefault();
        const searchQuery = evt.target.elements.query.value;
        if (!searchQuery) return;
        const nextParams = searchQuery !== "" ? { query: searchQuery } : {};
        setSearchParams(nextParams);
        evt.target.reset();
    };

    return (
        <>
            <InputBox>
                <form onSubmit={updateQueryString}>
                    <input type="text" name="query" />
                    <button type="submit">Search</button>
                </form>
            </InputBox>
            {loading && <ScaleLoader color="orangered" />}
                <List>
                    {filterMovies.results && filterMovies.results.map(({ id, title, poster_path }) =>
                        <Link key={id} to={`/movies/${id}`} state={{from: location}}>
                            {poster_path !== null ? <Image alt={title} width="100" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} /> : <Image alt={title} width="100" src={noImage} />}
                            <Title>{title}</Title>
                        </Link>)}
                </List>
        </>
    );
};

export default MoviePage;