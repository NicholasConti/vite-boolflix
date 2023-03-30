<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    name: 'Main',
    components: {
        AppCard,
    },
    data() {
        return {
            store,

        }
    }
}
</script>
<template>
    <section class="boh">
        <div>
            <div v-for="movie in store.movies">
                <AppCard :title="movie.title" :original_title="movie.original_title" :flag="movie.original_language"
                    :vote="movie.vote_average" />
            </div>
        </div>
        <div>
            <div v-for="serie in store.series">
                <AppCard :title="serie.name" :original_title="serie.original_name" :flag="serie.original_language"
                    :vote="serie.vote_average" />
            </div>
        </div>
    </section>
</template>

<style  scoped>
section.boh {
    display: flex;
}
</style>
