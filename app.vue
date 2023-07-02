<script setup>
import MainNav from "./components/MainNav.vue";

import { ref, onMounted, nextTick } from "vue";
onMounted(() => {
  nextTick(() => {
    if (typeof window !== "undefined") {
      import("animejs").then((anime) => {
        anime.default
          .timeline({ loop: false })
          .add({
            targets: ".flash",
            translateY: [100, 40],
            opacity: [0, 1],
            easing: "cubicBezier(.68,-0.24,.39,.91)",
            duration: 500,
            delay: 3000,
          })
          .add(
            {
              targets: ".main",
              translateY: [0, 40],
              easing: "cubicBezier(.68,-0.24,.39,.91)",
              duration: 500,
            },
            "-=500"
          )
          .add(
            {
              targets: ".pill",
              opacity: [0, 1],
              easing: "cubicBezier(.68,-0.24,.39,.91)",
              duration: 500,
            },
            "-=1000"
          );
      });
    }
  });
});
</script>

<template lang="pug">
.center-cont
  .center
    .flash.-witness-me 
      | Currently seeking new opportunities as a front end developer, reach out to me on 
      a(href="https://www.linkedin.com/in/willjmoran/") LinkedIn
    .main
      //- MainNav
      NuxtLayout
        NuxtPage
        .container.coming
          .pill.-figma Full site cooming soon
      .main-wrapper_lines
        .main-wrapper_dotted-line.animate-1
        .main-wrapper_dotted-line.animate-2
        .main-wrapper_dotted-line.animate-3
        .main-wrapper_dotted-line.animate-4
        .main-wrapper_dotted-line.animate-5
        .main-wrapper_dotted-line.animate-6
        .main-wrapper_dotted-line.animate-7
        .main-wrapper_dotted-line.animate-8
</template>

<style lang="scss">
.coming {
  text-align: center;

  .pill {
    opacity: 0;
  }
}

.center-cont {
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  min-height: 100vh;
}

.center {
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
}
.page-enter-from {
  opacity: 0;
  transform: scale(0.99);
  filter: blur(2px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.01);
  filter: blur(2px);
}

.flash {
  opacity: 0;
  &.-witness-me {
    background-color: #8367c7;
    font-size: 12px;
    font-weight: 400;
    color: white;
    text-align: center;
    padding: 16px 16px 32px 0;
    border-radius: 24px 24px 0 0;

    a {
      font-weight: 900;
      text-decoration: underline;
    }
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease;
}
.page-enter-from {
  opacity: 0;
  transform: scale(0.99);
  // filter: blur(2px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.01);
  // filter: blur(2px);
}

html {
  background: #edeff7;
}
body {
  max-width: 1600px;
  margin: 0 auto;
}

.main {
  background: white;
  margin: -16px 0 0 0;
  border-radius: 24px;
  position: relative;
  z-index: 10;
  overflow: hidden;
}
</style>
