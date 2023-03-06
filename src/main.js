import { createApp } from 'vue'

import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'


// FONTAWESOME
    // core
    import { library } from "@fortawesome/fontawesome-svg-core"
    // packages
    import { fontAwesomeIcon } from "@fortawesome/vue-fontawesome"
    // single icons
    import { faKiwiBird } from "@fortawesome/free-solid-svg-icons"

    library.add(faKiwiBird);

const app = createApp(App);
app.component("font-awesome-icon", fontAwesomeIcon);
app.mount('#app')



    // < i class="fa-solid fa-kiwi-bird" ></i >