import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/monokai-sublime.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueHighlightJS, {});
  nuxtApp.vueApp.directive("VueHighlightJS", {
    mounted(el, binding) {
      el.id = binding.value;
    },
  });
});
