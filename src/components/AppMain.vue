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
    },
    computed: {
        //FUNZIONE CHE UNISCE I RISULTATI OTTENUTI DALLE CHIAMATE TRAMITE AXIOS PER I FILM E LE SERIE
        result() {
            return [...this.store.movies, ...this.store.series];
        }
    }

}
</script>
<template>
    <!-- controllo per vedere se non ci sono risultati da stampare a schermo -->
    <section class="text-white" v-if="result.length > 0">
        <h1 class="p-3">Risultati: {{ result.length }}</h1>
        <div class="d-flex">
            <!-- ciclo per stampare i risultati -->
            <div v-for="resultMix in result">
                <AppCard :info="resultMix" />
            </div>
        </div>
    </section>
    <section class="text-white" v-else>
        <h1 class="pt-5">Benvenuto!! Cosa vuoi veder oggi?</h1>
    </section>
</template>

<style  scoped></style>
