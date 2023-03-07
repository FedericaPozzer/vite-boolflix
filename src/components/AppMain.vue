<script>
import SingleCardMovies from "./SingleCardMovies.vue"
import SingleCardSeries from "./SingleCardSeries.vue"

export default {
    components : { SingleCardMovies, SingleCardSeries },


  
}

</script>


<template>
    <div class="main-container">

        <div class="container-fluid pippo">
            <div class="cardu">
                <div class="front">
                    <h2>CARD'S FRONT</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, sed!</p>
                </div>
                <div class="back">
                    <h2>CARD'S BACK</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, et.</p>
                </div>
            </div>
        </div>




        <div class="container-fluid">
            <h3>MOVIES</h3>
            <div class="row row-cols-5">

                <SingleCardMovies></SingleCardMovies>
                
            </div>
        </div>

        <div class="container-fluid mt-5">
            <h3>TV SERIES</h3>
            <div class="row row-cols-5">

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
    min-height: $main-height;

    h3 {
        color: #ffffff;
    }
}

.pippo {
    width: 350px;
    height: 500px;
    .cardu {
        height: 100%;
        width: 100%;
        position: relative;
        transition: transform 1500ms;
        transform-style: preserve-3d;

        .back, .front {
            height: 100%;
            width: 100%;
            padding: 10px;
            border-radius: 2rem;
            box-shadow:  0  0 5px 2px rgba(50, 50, 50, 0.25);
            position: absolute;
            backface-visibility: hidden;
        }

        .front {
            background-color: aquamarine;
        }

        .back {
            background-color: pink;
            transform: rotateY(180deg);
        }


    }
}

.pippo:hover .cardu {
            cursor: pointer;
            transform: rotateY(180deg);
        }

</style>