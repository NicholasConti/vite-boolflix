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
            <!-- LOGO -->
            <a href="#"><img src="https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo"
                    class="me-3"></a>
            <ul class="d-flex gap-3 align-items-center m-0">
                <!-- ciclo che stampa gli elementi dei un array nello store contenete dei link -->
                <li v-for="link  in store.linksHome"><a href="#" class="text-white">{{ link }}</a></li>
            </ul>
        </div>
        <div>
            <!-- emit -->
            <form @submit.prevent="$emit('search-name')">
                <input type="text" class="bg-light border border-0 rounded-pill p-1 me-2" placeholder="Search Film"
                    v-model="store.searchText">
                <button type="submit" class="bg-transparent border border-0 fs-4 text-light"><font-awesome-icon
                        icon="fa-solid fa-magnifying-glass" /></button>
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped>
form {
    input:focus-visible {
        outline: 2px solid black;
    }
}
</style>

