<script>
import SingleCardMovies from "./SingleCardMovies.vue"
import SingleCardSeries from "./SingleCardSeries.vue"

export default {
    components : { SingleCardMovies, SingleCardSeries },


  
}

</script>


<template>
    <div class="main-container">

        <div class="container-fluid">
            <h3>MOVIES</h3>

                <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                    <SingleCardMovies></SingleCardMovies>
                
                </div>
            
        </div>

        <div class="container-fluid mt-5">
            <h3>TV SERIES</h3>

                <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                    <SingleCardSeries></SingleCardSeries>
                
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