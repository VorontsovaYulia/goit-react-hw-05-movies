import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, List, Text } from "./Reviews.styled";
import { fetchMovieReviews } from "api";

const Reviews = () => {
    const [reviews, setReviews] = useState(null)
    const { movieId } = useParams();
    
    useEffect(() => {
        if (!movieId) return;
        async function getReviews() {
            try {
                const movieReviews = await fetchMovieReviews(movieId);
                setReviews(movieReviews.results);
            } catch (error) {
                console.log(error)
            }
        };
        getReviews();
    }, [movieId]);
    
    return (
        reviews && reviews.length ? (<List>
            {reviews.map(({ author, id, content }) => {
                return <Box key={id}>
                    <h4>{author}</h4>
                    <Text>{content}</Text>
                </Box>
            })}
        </List>) : <Text>We don`t have any reviews for this movie</Text>
    );
};

export default Reviews;