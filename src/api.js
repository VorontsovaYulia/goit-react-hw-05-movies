import axios from "axios";

const apiKey = "08dc0edfc0d06b1624e52e5c6323d917";
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const fetchMoviesTrending = async () => {
    const response = await axios.get(`/3/trending/movie/day?api_key=${apiKey}`)
    return response.data;
};

export const fetchMoviesById = async (id) => {
    const response = await axios.get(`/3/movie/${id}?api_key=${apiKey}`)
    return response.data;
};

export const fetchMovieCast = async (id) => {
    const response = await axios.get(`/3/movie/${id}/credits?api_key=${apiKey}`)
    return response.data;
};

export const fetchMovieReviews = async (id) => {
    const response = await axios.get(`/3/movie/${id}/reviews?api_key=${apiKey}`)
    return response.data;
};

export const fetchMovieSearch = async (query) => {
    const response = await axios.get(`/3/search/movie?query=${query}&api_key=${apiKey}`)
    return response.data;
};
