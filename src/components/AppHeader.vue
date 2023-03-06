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
                )    
        },
       
    },
}

</script>


<template>
    <div class="header-container px-3 d-flex align-items-center justify-content-between">

        <div class="logo-netflix d-flex align-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix">
        </div>
        <!-- <h1 class="mb-0">HEADER
            <font-awesome-icon icon="fa-solid fa-kiwi-bird" />
        </h1> -->

        <SearchBar @send-data="fetchThisTitle"></SearchBar>

    </div>
</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.header-container {
    height: $header-height;
    position: fixed;
    width: 100%;
    background-color: #000000;

    .logo-netflix {
        height: $header-height;

        img {
            height: 75%;
            cursor: pointer;
        }
    }
}

</style>