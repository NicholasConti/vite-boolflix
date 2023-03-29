<script>
import { store } from '../store';
export default {
    name: 'Main',
    data() {
        return {
            store,

        }
    }
}
</script>

<template>
    <ul>
        <li v-for="movie in store.movies">
            <h4> {{ movie.title }}</h4>
            <ul>
                <li>{{ movie.original_title }}</li>
                <!-- CONTROLLO PER VEDERE SE LA LINGUA E TRA QUELLE CHE HANNO LA BANDIERA -->
                <li v-if="store.config.languages.includes(movie.original_language)">
                    <img :src="`../../public/img/` + movie.original_language + `.png`" alt="Flag">
                </li>
                <li v-else>{{ movie.original_language.toUpperCase() }}</li>
                <li>{{ movie.vote_average }}</li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
img {
    width: 50px;
}
</style>
