import { reactive } from "vue";


export const store = reactive({

    foundTitles : [], //all titles

    endpoint : "https://api.themoviedb.org/3",

    myKey: "489399f5d55c1fdfe1322a842bc8b5ed",

    imgEndpoint: "https://image.tmdb.org/t/p/w342",

    flagsEndpoint: "https://flagsapi.com/"

   // ”https://countryflagsapi.com/png/no"
    // use origin_country

    // : country_code / shiny / 64

});
