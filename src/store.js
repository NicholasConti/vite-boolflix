import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    allResults: [],
    config: {
        apiKey: '157fa4cf440f53cf54157c90f392fc84',
        url_movies: 'https://api.themoviedb.org/3/search/movie',
        ulr_series: 'https://api.themoviedb.org/3/search/tv',
        user_language: 'it-IT',
        url_img: 'https://image.tmdb.org/t/p/w342/'
    },
    linksHome: ['Home', 'Serie TV', 'Film', 'Originali', 'Aggiunti di recente', 'La mia lista']
});