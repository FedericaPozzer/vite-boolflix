<script>
import SearchBar from "./SearchBar.vue"

import axios from "axios"
import { store } from "../data/store"

export default {
    data() {
        return {
            store,
        }
    },

    components : { SearchBar },
    
    // methods : {
    //     fetchThisTitle(researched) { 
    //         axios.all([
    //             axios.get(`${store.endpoint}/search/movie?api_key=${store.myKey}&query=${researched}`, { pippo: response1 }),
    //             axios.get(`${store.endpoint}/search/tv?api_key=${store.myKey}&query=${researched}`, { paperino: response2 }),
    //         ])

    //         .then(axios.spread((response1, response2) =>
    //             response1.data.results = store.foundMoviesTitles,
    //             response2.data.results = store.foundSeriesTitles    
    //         ))               
    //     }
    // },

     methods: {
        fetchThisTitle(researched) {
            axios
                .get(`${store.endpoint}/search/movie?api_key=${store.myKey}&query=${researched}`)
                .then((response) =>
                    // console.log(response.data.results)

                    store.foundMoviesTitles = response.data.results,
                )
               
        },

        // pippo(researched) {
        //     axios
        //      .get(`${store.endpoint}/search/tv?api_key=${store.myKey}&query=${researched}`)
        //     .then((response) =>

        //         store.foundSeriesTitles = response.data.results,
        //     )
        // }
    },
}

</script>


<template>
    <div class="header-container px-3 d-flex align-items-center justify-content-between">

        <h1 class="mb-0">HEADER</h1>

        <SearchBar @send-data="fetchThisTitle"></SearchBar>

    </div>
</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.header-container {
    height: $header-height;
    position: fixed;
    width: 100%;


    // debug
    background-color: indianred;
}

</style>