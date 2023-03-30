<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Card',
    components: {
        CountryFlag
    },
    props: {
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
        }
    }
}
</script>


<template>
    <article>
        <ul>
            <li>
                <h4> {{ title }}</h4>
                <ul>
                    <li>{{ original_title }}</li>
                    <li><country-flag :country='getLanguage' size='small' /></li>
                    <li>{{ vote }}</li>
                </ul>
            </li>
        </ul>
    </article>
</template>
