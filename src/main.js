import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DefaultLayout from './DefaultLayout.vue'
import H1 from '@/components/ui/H1.vue'
import AppContainer from '@/components/AppContainer.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('h-1',H1)
app.component('app-container',AppContainer)
app.mount('#app')
