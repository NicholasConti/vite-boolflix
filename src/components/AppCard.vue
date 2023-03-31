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
    <article class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="checkImg" :alt="title">
            </div>
            <div class="flip-card-back">
                <h5>Titolo: {{ title }}</h5>
                <ul>
                    <li>Titolo originale:{{ original_title }}</li>
                    <li><country-flag :country='getLanguage' size='normal' /></li>
                    <li class="text-warning">
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
                    </li>
                    <li class="view">Overview: {{ info.overview }}</li>
                </ul>
            </div>
        </div>
    </article>
</template>
<style scoped lang="scss">
.flip-card {
    background-color: transparent;
    perspective: 1000px;
    width: 500px;
    height: 750px;
    cursor: pointer;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    background-color: #1b1b1b;
    color: white;
    transform: rotateY(180deg);
    padding: 20px;
}
</style>
