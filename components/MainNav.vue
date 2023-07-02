<template lang="pug">
nav
  .container
    .header__mobile
      .logo William Moran
      .nav-btn 
        //- font-awesome-icon(@click="showMobMenu = !showMobMenu" icon="fas fa-bars-staggered")
    .header__desk
      .logo William Moran
      //- ul.nav
      //-   li
      //-     NuxtLink( to="/") Home
      //-   li Work
      //-   li About
      //-   li Blog
      //-   li CV 
      //- .tool-links 
      //-   .pill.-git Hire me
        //- .pill.-figma Get a figma copy

  div.mobile-menu(v-show="showMobMenu") 
    p main munu 
    div(@click="showMobMenu = !showMobMenu") close me
</template>
  
<script>
  export default {
    data: function () {
      return {
        showMobMenu: false,
      };
    },
  };
</script>
  
<style lang="scss">
$grid-breakpoints-xs: 0;
$grid-breakpoints-sm: 576px;
$grid-breakpoints-md: 768px;
$grid-breakpoints-lg: 992px;
$grid-breakpoints-xl: 1200px;
$grid-breakpoints-xxl: 1400px;

  nav {
    border-bottom: 1px dashed #cbb4ee78;
    .container {
      margin: 0 auto;
      padding: 0 24px;
    }
  }
  
  .header {
    &__desk{
    display: none;
    justify-content: space-between;
    padding: 24px 0;
  
    @media screen and (min-width: $grid-breakpoints-lg) {
        display: flex;
      }
    .logo {
      font-size: 20px;
      font-weight: 900;
    }
    .nav {
      display: flex;
      list-style: none;
      gap: 40px;
      align-items: center;
    }
  
    .tool-links {
      display: flex;
      gap: 24px;
    }
  }
  
  &__mobile {
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
  
    @media screen and (min-width: $grid-breakpoints-lg) {
        display: none;
      }
  }
  }
  
  .pill {
    border-radius: 50px;
    font-size: 12px;
    font-weight: 500;
    padding: 8px 16px;
    color: white;
    display: inline-flex ;
  
    &.-git{
      background: black;
    }
  
    &.-figma{
      background: #8367C7;
    }
  
    &.-vue {
      background: #39b982;
      color: white;
    }
  }
  
  .mobile-menu {
    background: white;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
  }
  
  </style>
  