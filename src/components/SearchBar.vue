<script>
export default {
    data() {
        return {
            researched : "",
        }
    },

    emits : ["send-data"],

    methods : {
        researchedItem() {
            this.$emit("send-data", this.researched);
            console.log("researched " + this.researched);

            this.researched = "";
        }
    }
}

</script>


<template>

    <div>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search movies or series.."
            v-model="researched" @keyup.enter="researchedItem">
            <button class="btn btn-danger" type="button" @click="researchedItem">Search</button>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>

</style>










