import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(Flip)
import GsapFlipId from '@/plugins/GsapFlipId'

createApp(App)
  .use(store)
  .use(router)
  .use(GsapFlipId)
  .mount('#app')
