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
    <section class="text-white">
        <div class="d-flex">
            <div v-for="resultMix in result">
                <AppCard :info="resultMix" />
            </div>
        </div>
    </section>
</template>

<style  scoped></style>
