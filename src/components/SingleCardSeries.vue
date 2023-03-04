<!-- <script>
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
    <div class="col p-2 db" v-for="item in store.foundSeriesTitles">
        <div class="poster"></div>
        <div class="info text-center">
            <div class="titolo"> TITOLO: {{ item.name }} </div>
            <div class="titolo-originale"> TITOLO ORIGINALE: {{ item.original_name }} </div>
            <div class="lingua"> LINGUA: {{ item.original_language }} </div>
            <div class="voto"> VOTO: {{ item.vote_average }} </div>
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

</style> -->