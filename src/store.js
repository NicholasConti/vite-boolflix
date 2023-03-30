import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    config: {
        apiKey: '157fa4cf440f53cf54157c90f392fc84',
        url_movies: 'https://api.themoviedb.org/3/search/movie',
        ulr_series: 'https://api.themoviedb.org/3/search/tv',
        url_img: 'https://image.tmdb.org/t/p/w342/'
    }
});