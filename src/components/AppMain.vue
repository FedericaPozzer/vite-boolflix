<script>
import SingleCardMovies from "./SingleCardMovies.vue"

export default {
    components : { SingleCardMovies }
}

</script>


<template>
    <div class="main-container">

        <div class="container-fluid">
            <div class="row row-cols-5">

                <SingleCardMovies></SingleCardMovies>
                
            </div>
        </div>

        <div class="container-fluid">
            <div class="row row-cols-5">

                <!-- <SingleCardSeries></SingleCardSeries> -->
                
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.main-container {
    padding: 6rem 2rem 2rem 2rem;
    overflow: scroll;
    // debug
    background-color: pink;
    min-height: $main-height;
}

</style>