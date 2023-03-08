<script>
import SingleCard from "./SingleCard.vue"

import { store } from "../data/store"

export default {
     data() {
        return {
            store,
        }
    },

    components : { SingleCard },
}

</script>


<template>
    <div class="main-container">

        <div class="container-fluid">
            <h3>MOVIES</h3>

                <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                    <SingleCard
                    v-for="movie in store.foundTitles"
                    :title="movie.title"
                    :originalTitle="movie.original_title"
                    :lang="movie.original_language"
                    :vote="movie.vote_average"
                    :overview="movie.overview"
                    :poster="movie.poster_path"
                    :media="movie.media_type"                   

                    v-show= "movie.title && movie.poster_path"
                    ></SingleCard>
                
                </div>
            
        </div>

        <div class="container-fluid mt-5">
            <h3>TV SERIES</h3>

                <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                    <SingleCard
                    v-for="serie in store.foundTitles"
                    :title="serie.name"
                    :originalTitle="serie.original_name"
                    :lang="serie.original_language"
                    :vote="serie.vote_average"
                    :overview="serie.overview"
                    :poster="serie.poster_path"
                    :media="serie.media_type"

                    v-show= "serie.name && serie.poster_path"
                    ></SingleCard>
                
                </div>
            
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.main-container {
    padding: 6rem 2rem 2rem 2rem;
    overflow: scroll;
    background-color: #434343;
    height: $main-height;


    h3 {
        color: #ffffff;
    }
}

</style>