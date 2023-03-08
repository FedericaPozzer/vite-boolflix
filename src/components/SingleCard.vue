<script>
import { store } from "../data/store"

export default {
    data() {
        return {
            store,
        }
    },

    methods: {
        getFlag(country) {
            if (country != "en" && country != "ja") return `${store.tryEndpoint}${country}.png`;

            if (country == "en") return `../../public/backup-flags/${country}.png`; 
            if (country == "ja") return `../../public/backup-flags/${country}.png`;
        },


        transformVote(vote) {
            return parseInt(vote / 2)
        },

    },

    props : {
        title : String,
        originalTitle : String,
        lang : String,
        vote : Number,
        overview : String,
        poster : String,
        media : String,
    },

}

</script>


<template>
    <div class="col p-2 flip-container">
        <div class="flip-card">

            <div class="poster front">
                <img :src="`${store.imgEndpoint}${ poster }`" alt="poster">
            </div>

            <div class="info back p-3 text-center d-flex flex-column" v-show="media == 'movie'">
                <div class="titolo my-2"> TITOLO: <b class="fs-5">{{ title }}</b> </div>
                <div class="titolo-originale"> TITOLO ORIGINALE: {{ originalTitle }} </div>

                <!-- flag -->
                <div class="flag my-3">
                    <img :src="getFlag( lang )" alt="flag">
                </div>

                <!-- stars -->
                <div class="d-flex justify-content-center mb-4">
                    <div v-for="numero in 5" :key="numero">
                        <font-awesome-icon v-if="numero <= transformVote( vote )" icon="fa-solid fa-star" />
                        <font-awesome-icon v-if="numero > transformVote( vote )" icon="fa-regular fa-star" />
                    </div>
                </div>

                <!-- overview -->
                <div class="overview">
                    <div> {{ overview }} </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../scss/style.scss" as *;
@use "../scss/partials/variables" as *;


.col {
    height: 30rem;
    overflow: hidden;

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

        .flag img {
            height: 48px;
            width: 64px;
        }

        .overview {
            overflow: scroll;
        }
    }
}
</style>