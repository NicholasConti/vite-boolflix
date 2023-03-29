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
                    query: store.searchText
                }
            })
                .then((response) => {
                    this.store.movies = response.data.results;
                    console.log(this.store.movies);

                })
        }
    }
}
</script>

<template>
    <AppHeader @searchName="search" />
    <AppMain />
</template>

<style scoped></style>
