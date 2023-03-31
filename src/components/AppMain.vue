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
        result() {
            return [...this.store.movies, ...this.store.series];
        }
    }

}
</script>
<template>
    <section class="text-white" v-if="result.length > 0">
        <h1 class="p-3">Risultati:</h1>
        <div class="d-flex">
            <div v-for="resultMix in result">
                <AppCard :info="resultMix" />
            </div>
        </div>
    </section>
    <secttion class="text-white" v-else>
        <h1 class="pt-5">Benvenuto!! Che cosa vuoi veder oggi?</h1>
    </secttion>
</template>

<style  scoped></style>
