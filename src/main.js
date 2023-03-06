import { createApp } from 'vue'

import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'


// FONTAWESOME
    // core
    import { library } from '@fortawesome/fontawesome-svg-core' 
    // packages
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    // single icons
    import { faKiwiBird, faStar as SolidStar } from '@fortawesome/free-solid-svg-icons'
    import { faStar as RegularStar } from '@fortawesome/free-regular-svg-icons'

    library.add(faKiwiBird, SolidStar, RegularStar);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')