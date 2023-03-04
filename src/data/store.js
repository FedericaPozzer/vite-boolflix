import { reactive } from "vue";


export const store = reactive({

    foundMoviesTitles : [], //movies

    // foundSeriesTitles : [], //series

    endpoint : "https://api.themoviedb.org/3",

    myKey: "489399f5d55c1fdfe1322a842bc8b5ed",


});
