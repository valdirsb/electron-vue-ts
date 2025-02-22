import { createApp } from 'vue'
import App from './App.vue'

//route
import router from './router'

// Vuetify
import 'vuetify/styles'
import vuetifyConfig from './plugins/vuetify'


createApp(App).use(vuetifyConfig).use(router).mount('#app')
