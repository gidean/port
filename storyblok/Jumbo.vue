<script setup>
  const props = defineProps({ blok: Object })
</script>

<template lang="pug">
div(v-editable="blok")
  .container
    .jumbo 
      .text
        //- .pill.-vue(v-if="pillMsg") {{ pillMsg }}
        .h1 {{ blok.h1 }}
        .h2 {{ blok.h2 }}
        //- .socials(v-if="showSocials")
        //-   .btn
        //-     font-awesome-icon(icon="fa-brands fa-github-alt")
        //-   .btn
        //-     font-awesome-icon(icon="fa-brands fa-github-alt")
        //-   .btn
        //-     font-awesome-icon(icon="fa-brands fa-github-alt")
      .image
        img(:src="blok.image.filename + '/m/1600x0'"
            alt="here"
            class="logo"
            width="400"
            height="400")
</template>
<style lang="scss">
$grid-breakpoints-xs: 0;
$grid-breakpoints-sm: 576px;
$grid-breakpoints-md: 768px;
$grid-breakpoints-lg: 992px;
$grid-breakpoints-xl: 1200px;
$grid-breakpoints-xxl: 1400px;

.jumbo {
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  .text {
      .h1 {
    font-size: 32px;
    font-weight: 900;
    margin: 16px 0 24px;
  }

  .h2 {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 24px;
  }

  }

  .image {
    margin-bottom: 40px;
    order: -1;
    img {
      max-width: 200px;
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  // TODO: make this better
  img {
    border: 0;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
}

@media screen and (min-width: $grid-breakpoints-xxl ) {
  .jumbo {
    flex-direction: row;
    max-width: initial;
    text-align: left;
    padding: 140px 0;

  .text {
    width: 50%;
      .h1 {
        font-size: 40px;

  }

  .h2 {
      font-size: 20px;
  }

  }

  .image {
    width: 50%;
    order: initial;
    text-align: center;
    margin: 0;

    img {
      max-width: 400px;
    }
  }

  .socials {
    justify-content: flex-start;
  }
}
}

.green-grad {
  background: #68FF92;
  background: linear-gradient(to top right, #68FF92 0%, #00330E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}
</style>