import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "api";
import { Box, List, Text } from "./Reviews.styled";


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
        reviews && reviews.length ? (<List>
            {reviews.map(({author, id, content}) => {
                return <Box key={id}>
                    <h4>{author}</h4>
                    <Text>{content}</Text>
                </Box>
            })}
        </List>) : "We don`t have any reviews for this movie"
    );
};

export default Reviews;