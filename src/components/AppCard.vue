<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Card',
    components: {
        CountryFlag
    },
    data() {
        return {
            store
        }
    },
    props: {
        img: String,
        title: String,
        original_title: String,
        flag: String,
        vote: Number
    },
    computed: {
        getLanguage() {
            switch (this.flag) {
                case 'en':
                    return 'gb';
                case "ko":
                    return "kr";
                case "ja":
                    return "jp";
                default:
                    return this.flag;
            }
        },
        getVote() {
            return Math.ceil(this.vote / 2);
        }
    }
}
</script>


<template>
    <article>
        <ul>
            <li>
                <img :src="store.config.url_img + img" :alt="title">
                <h4> {{ title }}</h4>
                <ul>
                    <li>{{ original_title }}</li>
                    <li><country-flag :country='getLanguage' size='small' /></li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
                    </li>
                </ul>
            </li>
        </ul>
    </article>
</template>
