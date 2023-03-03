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

    // created() {
    //     axios.get(`${store.endpoint}/search/movie?api_key=${store.myKey}`)
    //     .then((response) => 
    //     console.log(`${store.endpoint}/search/movie?api_key=${store.myKey}&query=ritorno+al+futuro`))
    // },
    
    methods : {
        fetchThisTitle(researched) { 
            axios
            .get(`${store.endpoint}/search/movie?api_key=${store.myKey}`)
                .then((response) =>
                console.log(`${store.endpoint}/search/movie?api_key=${store.myKey}&query=${researched}`))
               
        }
    },

    // created() {
    //      axios
    //         .get("https://api.themoviedb.org/3search/movie?api_key=489399f5d55c1fdfe1322a842bc8b5ed&query=rick")
    //         .then((response) => {
    //             console.log(response);
    //         })
    // }
}

</script>


<template>
    <div class="header-container px-3 d-flex align-items-center justify-content-between">

        <h1 class="mb-0">HEADER</h1>

        <SearchBar @send-data="fetchThisTitle"></SearchBar>
        <!-- @send-data="fetchThisTitle" -->

    </div>
</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.header-container {
    height: $header-height;

    // debug
    background-color: indianred;
}

</style>