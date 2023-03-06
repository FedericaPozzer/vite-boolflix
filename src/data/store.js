import { reactive } from "vue";


export const store = reactive({

    foundTitles : [], //all titles

    endpoint : "https://api.themoviedb.org/3",

    myKey: "489399f5d55c1fdfe1322a842bc8b5ed",

    imgEndpoint: "https://image.tmdb.org/t/p/w200"

    // imgEndpoint: "https://countryflagsapi.com/png/br"

    // origin_country

});
