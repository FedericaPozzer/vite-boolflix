<script>
import SingleCard from "./SingleCard.vue"

export default {
    components : { SingleCard }
}

</script>


<template>
    <div class="main-container p-3">
        <h2>MAIN</h2>
        <div class="container-fluid">
            <div class="row row-cols-5">

                <SingleCard></SingleCard>
                
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.main-container {
    height: $main-height;

    // debug
    background-color: pink;
}

</style>