import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import toast, { Toaster } from 'react-hot-toast';
import { Btn, Image, InputBox, InputStyled, List } from "./MoviePage.styled";
import { fetchMovieSearch } from "api";
import noImage from "../NoImageAvailable.jpg";

const notifyNoQuery = () => toast.error("Please, enter your query");
const notifyNoMovies = () => toast.error("Nothing found for your request :(");

const MoviePage = () => {
    const [filterMovies, setFilterMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get('query') ?? "";
    const location = useLocation();

    useEffect(() => {
        if (querySearch === "") return;
        async function getMoviesSearch() {
            try {
                setLoading(true)
                const movies = await fetchMovieSearch(querySearch);
                setFilterMovies(movies);
                if (!movies.results.length) notifyNoMovies();
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        };
        getMoviesSearch();
    }, [querySearch]);

    const updateQueryString = (evt) => {
        evt.preventDefault();
        const searchQuery = evt.target.elements.query.value;
        if (!searchQuery) return notifyNoQuery();
        const nextParams = searchQuery !== "" ? { query: searchQuery } : {};
        setSearchParams(nextParams);
        evt.target.reset();
    };

    return (
        <>
            <InputBox>
                <form onSubmit={updateQueryString}>
                    <InputStyled type="text" name="query" />
                    <Btn type="submit">Search</Btn>
                </form>
            </InputBox>
            {loading && <ScaleLoader color="orangered" />}
            <List>
                {filterMovies.results && filterMovies.results.map(({ id, title, poster_path }) =>
                    <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                        {poster_path !== null ? <Image alt={title} width="100" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} /> : <Image alt={title} width="100" src={noImage} />}
                        <h4>{title}</h4>
                    </Link>)}
            </List>
            <Toaster position="top-right"/>
        </>
    );
};

export default MoviePage;