import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "api";


const Cast = () => {
    const [ , setLoading] = useState(false)
    const [cast, setCast] = useState(null)
    const { movieId } = useParams();
    useEffect(() => {
        async function getCast() {
            try {
                setLoading(true);
                const movieCast = await fetchMovieCast(movieId);
                setCast(movieCast.cast);
                console.log(movieCast)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getCast();
    }, [movieId]);

    return (
        <div>
            <ul>
                {cast && cast.map(({name, id, character, profile_path}) => {
                    return <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width="100" />
                        <p>{name}</p>
                        <p>{character}</p>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Cast;