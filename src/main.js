import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/main.scss';
// // Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as fullS } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar, fullS)
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
