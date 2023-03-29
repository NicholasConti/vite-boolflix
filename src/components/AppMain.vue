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
    <section>
        <div>
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
        </div>
        <div>
            <ul>
                <li v-for="serie in store.series">
                    <h4>{{ serie.name }}</h4>
                    <ul>
                        <li>{{ serie.original_name }}</li>
                        <li v-if="store.config.languages.includes(serie.original_language)">
                            <img :src="`../../public/img/` + serie.original_language + `.png`" alt="Flag">
                        </li>
                        <li v-else>{{ serie.original_language.toUpperCase() }}</li>
                        <li>{{ serie.vote_average }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
img {
    width: 50px;
}

section {
    display: flex;
}
</style>
