import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from "./assets/icons/fontawesome";
<<<<<<< HEAD
=======


>>>>>>> 85a4c5999fcb7656b748c0c0e87b5cefae9a8a8c

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')

