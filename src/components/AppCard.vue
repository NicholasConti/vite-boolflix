<script>
export default {
    name: 'Card',
    props: {
        title: String,
        original_title: String,
        flag: String,
        vote: Number
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
                    <li>{{ flag }}</li>
                    <li>{{ vote }}</li>
                </ul>
            </li>
        </ul>
    </article>
</template>
