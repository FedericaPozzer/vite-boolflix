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
            if (country) return `${store.flagsEndpoint}${country}/shiny/64.png`;

            // return `https://url/to/${conuntry}/flag`;
        },

        transformVote(vote) {
            return parseInt(vote / 2)
        },

        // printStars(number) {
        //     if (number == 3) return '<font-awesome-icon icon="fa-solid fa-star" />'
        // }


        // <font-awesome-icon icon="fa-solid fa-star" />
        // <font-awesome-icon icon="fa-regular fa-star" />
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
            <div class="flag"> 
                <!-- TODO: make this work -->
                <img :src="getFlag(item.original_language)" alt="flag">
            </div>
            <div class="voto"> VOTO: {{ item.vote_average }} </div>

            <!-- TODO: stampare le stelle -->
            <div> voto dimezzato parsato: {{ transformVote(item.vote_average) }} </div>
            <div>
                STELLE: 
                <!-- :bind="printStars(transformVote(item.vote_average))" no lol -->
                <!-- {{ printStars(transformVote(item.vote_average)) }} no lol -->

                <div v-show="transformVote(item.vote_average)">
                    <font-awesome-icon icon="fa-solid fa-star"/>
                </div>



                <!-- <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-regular fa-star" /> -->
                
            </div>
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

        // .flag img {
        //    height: 50px;
        //    width: 50px; 
        // }
    }
}

</style>