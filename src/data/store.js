import { reactive } from "vue";


export const store = reactive({

    foundTitles : [], //all

    // foundMoviesTitles : [], //movies

    // foundSeriesTitles : [], //series

    endpoint : "https://api.themoviedb.org/3",

    myKey: "489399f5d55c1fdfe1322a842bc8b5ed",

    // imgEndpoint: "https://image.tmdb.org/t/p/w200"


    // computed : {
    //     sort() {
    //         this.foundMoviesTitles = this.foundTitles((title) => {
    //             return title.media_type == "movie"
    //         })
    //         this.foundSeriesTitles = this.foundTitles((title) => {
    //             return title.media_type == "tv"
    //         });
    //         console.log(foundMoviesTitles);

    //     }
    // }

    // computed: {
    //     separateTitles() {
    //         for (title in this.foundTitles) {
    //             console.log(title);

                // if (this.foundTitles.media_type == "movie") {
                //     thise.foundMoviesTitles = response.data.results
                // } else if (this.foundTitles.media_type == "tv") {
                //     this.foundSeriesTitles = response.data.results
                // }
    //         }

    //     },

    // },

});
