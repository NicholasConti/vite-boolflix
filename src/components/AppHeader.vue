<script>
import { store } from '../store';

export default {
    name: 'Header',
    data() {
        return {
            store,

        }
    }
}
</script>

<template>
    <form @submit.prevent="$emit('searchName')">
        <input type="text" placeholder="Search Film" v-model="store.searchText">
        <button type="submit">Search</button>
    </form>
    <ul>
        <li v-for="movie in store.movies">
            <h4> {{ movie.title }}</h4>
            <ul>
                <li>{{ movie.original_title }}</li>
                <li>{{ movie.original_language }}</li>
                <li>{{ movie.vote_average }}</li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>