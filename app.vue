<script setup>
import MainNav from './components/MainNav.vue';
</script>

<template lang="pug">
.flash.-witness-me 
  | Currently seeking new opportunities as a front end developer, reach out to me on LinkedIn
.main
  MainNav
  NuxtLayout
    NuxtPage
</template>

<style lang="scss">

.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
}
.page-enter-from {
  opacity: 0;
  transform: scale(.99);
  filter: blur(2px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.01);
  filter: blur(2px);
}

.flash {
  &.-witness-me  {
    background-color: #F2C075;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding: 16px 16px 32px 0;
    border-radius: 24px 24px 0 0;
  } 
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease;
}
.page-enter-from {
  opacity: 0;
  transform: scale(.99);
  // filter: blur(2px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.01);
  // filter: blur(2px);
}

html {
  background: #ebf5f3;
}
body {
  max-width: 1600px;
  margin: 0 auto;
}

.main {
  background: white;
  margin: -36px 0 0 0;
  border-radius: 24px;
  min-height: 100vh;

}

</style>

