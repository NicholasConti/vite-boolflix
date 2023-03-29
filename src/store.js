import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    config: {
        apiKey: '157fa4cf440f53cf54157c90f392fc84'
    }
});