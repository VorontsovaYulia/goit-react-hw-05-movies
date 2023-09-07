import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "api";


const Reviews = () => {
    const [, setLoading] = useState(false)
    const [reviews, setReviews] = useState(null)
    const { movieId } = useParams();
    
    useEffect(() => {
        async function getReviews() {
            try {
                setLoading(true);
                const movieReviews = await fetchMovieReviews(movieId);
                setReviews(movieReviews.results);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getReviews();
    }, [movieId]);
    
    return (
        reviews && reviews.length ? (<ul>
            {reviews.map(({author, id, content}) => {
                return <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                </li>
            })}
        </ul>) : "We don`t have any reviews for this movie"
    );
};

export default Reviews;