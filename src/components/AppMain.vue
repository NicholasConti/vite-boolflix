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
    <section class="text-white">
        <div class="d-flex">
            <div v-for="resultMix in store.allResults">
                <AppCard :info="resultMix" />
            </div>
        </div>
    </section>
</template>

<style  scoped></style>
