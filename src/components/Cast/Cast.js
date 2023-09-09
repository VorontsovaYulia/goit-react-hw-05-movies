import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "api";
import { Card, Image, List, Wrapper } from "./Cast.styled";
import defaultImg from "../avatar.png";
import { ScaleLoader } from "react-spinners";

const Cast = () => {
    const [loading, setLoading] = useState(false)
    const [cast, setCast] = useState(null)
    const { movieId } = useParams();
    useEffect(() => {
        async function getCast() {
            try {
                setLoading(true);
                const movieCast = await fetchMovieCast(movieId);
                setCast(movieCast.cast);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getCast();
    }, [movieId]);

    return (
        <Wrapper>
            {loading && <ScaleLoader color="orangered" />}
            <List>
                {cast && cast.map(({ name, id, character, profile_path }) => {
                    return <li key={id}>
                        {profile_path !== null ? <Image src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width="180" /> : <Image src={defaultImg} alt={name} width="180"/>} 
                        <Card>
                            <h4>{name}</h4>
                            <p>{character}</p>
                        </Card>
                    </li>
                })}
            </List>
        </Wrapper>
    );
};

export default Cast;