<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            console.log('ho ascoltato questo evento');
            axios.get(store.config.url_movies, {
                params: {
                    api_key: store.config.apiKey,
                    language: store.config.user_language,
                    query: store.searchText
                }
            })
                .then((response) => {
                    this.store.movies = response.data.results;
                    // console.log(this.store.movies);
                })

            axios.get(store.config.ulr_series, {
                params: {
                    api_key: store.config.apiKey,
                    language: store.config.user_language,
                    query: store.searchText
                }
            })
                .then((response) => {
                    this.store.series = response.data.results;
                    //console.log(this.store.series);
                })
        }
    }
}
</script>

<template>
    <AppHeader @search-name="search" />
    <AppMain />
</template>

<style scoped></style>
