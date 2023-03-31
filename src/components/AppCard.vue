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
        info: Object
    },
    computed: {
        getLanguage() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';
                case "ko":
                    return "kr";
                case "ja":
                    return "jp";
                default:
                    return this.info.original_language;
            }
        },
        getVote() {
            return Math.ceil(this.info.vote_average / 2);
        },
        title() {
            return this.info.title || this.info.name;
        },
        original_title() {
            return this.info.original_title || this.info.original_name;
        },
        checkImg() {
            if (this.info.poster_path === null) {
                return 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg';
            } else {
                return (store.config.url_img + this.info.poster_path);
            }
        }
    }
}
</script>
<template>
    <article>
        <ul>
            <li>
                <img :src="checkImg" :alt="title">
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
<style scoped>
img {
    width: 342px;
    height: 513px;
}
</style>
