<script>
import { store } from '../store';

export default {
    name: 'Header',
    data() {
        return {
            store,

        }
    },
    emits: ["searchName"],
    methods: {
        flags(country) {
            let text = '';
            switch (country) {
                case "en":
                    text = "../assets/img/united-kingdom.png";
                    break;
            }
            console.log(text);
            return text;
        }
    }

}
</script>

<template>
    <form @submit.prevent="$emit('searchName')">
        <input type="text" placeholder="Search Film" v-model="store.searchText">
        <button type="submit">Search</button>
    </form>
</template>

<style lang="scss" scoped></style>