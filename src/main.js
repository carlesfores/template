import { createApp } from 'vue';
import './reset.css';
import './style.css';
import App from './App.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope, faLocationDot, faBars, faXmark, faCopyright, faGhost, faLanguage } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faEnvelope, faLocationDot,faBars, faXmark, faCopyright, faGhost, faLanguage);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app');
