import axios from "axios";

const apiKey = "08dc0edfc0d06b1624e52e5c6323d917";
// const accessKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDNmYTlkYTE2MzFhZTYxMzQ4OTM0N2I2YWJkM2VmZCIsInN1YiI6IjY0Zjc2OGMxMmNkZTk4MDBlMzc4ZDMzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bqL2XwJy7tUIQNxa4Q7xzaa00VKIkctPVGtTvGej5PM";

axios.defaults.baseURL = 'https://api.themoviedb.org';

export const fetchMoviesTrending = async () => {
    const response = await axios.get(`/3/trending/movie/day?api_key=${apiKey}`)
    return response.data;
}

export const fetchMoviesById = async (id) => {
    const response = await axios.get(`/3/movie/${id}?api_key=${apiKey}`)
    return response.data;
}
export const fetchMovieCast = async (id) => {
    const response = await axios.get(`/3/movie/${id}/credits?api_key=${apiKey}`)
    return response.data;
}

export const fetchMovieReviews = async (id) => {
    const response = await axios.get(`/3/movie/${id}/reviews?api_key=${apiKey}`)
    return response.data;
}

