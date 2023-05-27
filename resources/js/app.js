import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  // You can set your default options here
};
// import DefaultLayout from './pageLayOut/DefaultLayout.vue'
createInertiaApp({
  resolve: name => {
    let page = require(`./Pages/${name}`).default

    // if(!page.layout) {
    //   page = DefaultLayout;
    // }

    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .component('inertia-link', Link)
      .use(plugin)
      .use(Toast, options)
      .mount(el)
  },
})