<script>
import { store } from "../data/store"

export default {
    data() {
        return {
            store,
        }
    },

    methods : {
        getFlag(country) {
            if (country) return `${store.flagsEndpoint}${country}/shiny/64.png`;
        },


         backupFlag(sigla) {
            if (sigla) return `/backup-flags/${sigla}.png`
        },


         transformVote(vote) {
            return parseInt(vote / 2)
        },
    }
}

</script>


<template>

    <div class="col p-2 flip-container db" v-for="item in store.foundTitles" v-show="item.name && item.poster_path">
        <div class="flip-card">
            <div class="poster front">
                <img :src="`${store.imgEndpoint}${item.poster_path}`" alt="poster">
            </div>
            <div class="info back p-3 text-center" v-show="item.media_type == 'tv'">
                <div class="titolo my-2"> TITOLO: <b class="fs-5">{{ item.name }}</b> </div>
                <div class="titolo-originale"> TITOLO ORIGINALE: {{ item.original_title }} </div>

                <!-- flag -->
                <!-- <div class="lingua"> LINGUA: {{ item.original_language }} </div> -->
                <div class="flag my-3"> 
                    <!-- TODO: not working, so.. -->
                    <img :src="getFlag(item.original_language)" alt="">
                        <!-- TODO: habemus backup flags! -->
                    <div class="backup-flag">
                        <img :src="backupFlag(item.original_language)" alt="backup-flag">
                    </div>
                </div>
                
                <!-- stars -->
                <div class="d-flex justify-content-center mb-4">
                    <div v-for="numero in 5" :key="numero">
                        <font-awesome-icon v-if="numero <= transformVote(item.vote_average)" icon="fa-solid fa-star"/>
                        <font-awesome-icon v-if="numero > transformVote(item.vote_average)" icon="fa-regular fa-star"/>
                    </div>
                </div>

                <!-- overview -->
                <div class="overview d-flex">
                    <div class="overview-text"> {{ item.overview }} </div>
                </div>
                <!-- <div class="text-primary"> DEBUG : {{ item.media_type }}</div> -->
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
@use "../scss/style.scss" as *;
@use "../scss/partials/variables" as *;

// .db {
//     border: 1px dashed black;
// }

.col {
    height: 30rem;

    .poster {

        img {
            width: 100%;
            height: 29rem;
            border: $border-white;
        }
    }

    .info {
        background-color: rgb(23, 22, 22);
        color: #ffffff;
        height: 100%;
        border: $border-white;

        .backup-flag img {
           width: 70px;
        }

        .overview {
            height: 100%;
            margin-top: auto;


            .overview-text {
                height: 40%;
                overflow: scroll;
            }
        }
    }
}
</style>


