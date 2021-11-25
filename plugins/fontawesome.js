import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faLinkedin)
library.add(faGithub)
library.add(faItchIo)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
