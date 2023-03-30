<script>
import { store } from '../store';

export default {
    name: 'Header',
    data() {
        return {
            store,

        }
    },
    emits: ["search-name"]
}
</script>

<template>
    <header class="d-flex justify-content-between p-3 align-items-center">
        <div class="d-flex">
            <img src="https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo">
            <ul class="d-flex gap-3">
                <li v-for="link  in store.linksHome"><a href="#" class="text-white">{{ link }}</a></li>
            </ul>
        </div>
        <div>
            <form @submit.prevent="$emit('search-name')">
                <input type="text" placeholder="Search Film" v-model="store.searchText">
                <button type="submit">Search</button>
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>

