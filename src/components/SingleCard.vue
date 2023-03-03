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
    <div class="col p-2 db">
        <div class="poster"></div>
        <div class="info text-center">
            <div class="titolo"> {{ store.foundTitles[0].title }} </div>
            <div class="titolo-originale"> {{ store.foundTitles[0].original_title }} </div>
            <div class="lingua"> {{ store.foundTitles[0].original_language }} </div>
            <div class="voto"> {{ store.foundTitles[0].vote_average }} </div>
        </div>
    </div>

    <!-- debug items -->
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    <div class="col db"></div>
    


</template>


<style lang="scss" scoped>
.db {
    border: 1px dashed black;
    height: 10rem;
}

.info {
    overflow: scroll;
}

</style>