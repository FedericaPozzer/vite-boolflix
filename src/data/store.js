import { reactive } from "vue";

// questo è un export e non un export default perchè l'export default non accetta dichiarazioni di variabili.. per questo motivo (perchè ho una variabile) quando poi la richiamo altrove lo faccio tra parentesi graffe { store }. Se la costante si chiamasse pippo dovrei richiamarla con { pippo }.
export const store = reactive({

    foundTitles : [], //all titles

    endpoint : "https://api.themoviedb.org/3",

    myKey: "489399f5d55c1fdfe1322a842bc8b5ed",

    imgEndpoint: "https://image.tmdb.org/t/p/w342",

    flagsEndpoint: "https://countryflagsapi.com/png/",

});
