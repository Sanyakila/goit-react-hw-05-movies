import axios from "axios";

const moviesAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = '6aa771366ac6b5ed8b84d1848afc45ff';

export const fetchMoviesTrending = async () => {
    const response = await moviesAPI.get('trending/movie/day?', {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data.results;
}

export const fetchMovieSearch = async (searchQuery) => {
    const response = await moviesAPI.get('/search/movie?', {
        params: {
            api_key: API_KEY,
            query: searchQuery,
        },
    });

    return response.data.results;
}

export const fetchMovieInfo = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data;
}

export const fetchMovieCast = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}/credits?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data.cast;
}

export const fetchMovieReviews = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}/reviews?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data.results;
}

const api = {
    fetchMoviesTrending,
    fetchMovieSearch,
    fetchMovieInfo,
    fetchMovieCast,
    fetchMovieReviews,
}

export default api;