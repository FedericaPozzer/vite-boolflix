<script>
import SingleCard from "./SingleCard.vue"

export default {
    components : { SingleCard }
}

</script>


<template>
    <div class="main-container">

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
    padding: 6rem 2rem 2rem 2rem;
    overflow: scroll;
    // debug
    background-color: pink;
}

</style>