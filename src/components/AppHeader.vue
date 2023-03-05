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
    

    methods: {
        fetchThisTitle(researched) {
            axios
                .get(`${store.endpoint}/search/multi?api_key=${store.myKey}&query=${researched}`)
                .then((response) =>
                    // console.log(response.data.results)

                    store.foundTitles = response.data.results,

                    // separateTitles(response)
                      

                //      if (response.data.results.media_type == "movie") {
                // store.foundMoviesTitles = response.data.results,

                //     } else if (response.data.results.media_type == "tv") {
                // store.foundMoviesTitles = response.data.results,
                //     }
                   
                )    

            
            // FLAGS    
            // axios 
            //     .get(`https://countryflagsapi.com/:png/:${flag}`)
        },

        // separateTitles(response) {

        //     if (this.response.data.results.media_type == "movie") {
        //         store.foundMoviesTitles = this.response.data.results
        //     } else if (this.response.data.results.media_type == "tv") {
        //         store.foundSeriesTitles = this.response.data.results
        //     }
            
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