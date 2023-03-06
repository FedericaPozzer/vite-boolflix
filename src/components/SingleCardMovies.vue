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

    <div class="col p-2 db" v-for="item in store.foundTitles" v-show="item.title">
        <div class="poster">
            <img src="" alt="poster">
        </div>
        <div class="info text-center" v-show="item.media_type == 'movie'">
            <div class="titolo"> TITOLO: {{ item.title }} </div>
            <div class="titolo-originale"> TITOLO ORIGINALE: {{ item.original_title }} </div>
            <div class="lingua"> LINGUA: {{ item.original_language }} </div>
            <div class="voto"> VOTO: {{ item.vote_average }} </div>
            <div class="text-primary"> DEBUG : {{ item.media_type }}</div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.db {
    border: 1px dashed black;
    height: 20rem
}

.col {
    overflow: scroll;
}

</style>