<script>
import SearchBar from "./SearchBar.vue"

export default {
    components : { SearchBar }
}

</script>


<template>
    <div class="header-container px-3 d-flex align-items-center justify-content-between">

        <h1 class="mb-0">HEADER</h1>

        <SearchBar></SearchBar>

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