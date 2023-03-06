<script>
import { store } from "../data/store"

export default {
    data() {
        return {
            store,
        }
    },
}

</script>


<template>

    <div class="col p-2 db" v-for="item in store.foundTitles" v-show="item.title && item.poster_path">
        <div class="poster">
            <img :src="`${store.imgEndpoint}${item.poster_path}`" alt="poster">
        </div>
        <div class="info p-3 text-center" v-show="item.media_type == 'movie'">
            <div class="titolo"> TITOLO: {{ item.title }} </div>
            <div class="titolo-originale"> TITOLO ORIGINALE: {{ item.original_title }} </div>
            <div class="lingua"> LINGUA: {{ item.original_language }} </div>
            <div class="voto"> VOTO: {{ item.vote_average }} </div>
            <div class="text-primary"> DEBUG : {{ item.media_type }}</div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
@use "../scss/style.scss" as *;

.db {
    border: 1px dashed black;

    // height: 20rem
}

.col {
    overflow: scroll;

    .poster {

        img {
            max-width: 100%;
        }
    }   

    .info {
        background-color: rgb(23, 22, 22);
        color: #ffffff;
        height: 100%;
    }
}

</style>