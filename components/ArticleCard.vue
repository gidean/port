<template lang="pug">
NuxtLink(:to="'/' + slug"
         v-editable="article"
         class="article")
  .image
    img(:src="article.image.filename + '/m/1600x0'"
        alt="here"
        class="logo"
        width="100"
        height="100")
  .text 
    .title {{ article.title }}
    .desc {{ article.desc }}
</template>

<script setup>
  defineProps({ article: Object, slug: String })
</script>

<style lang="scss">
$grid-breakpoints-xs: 0;
$grid-breakpoints-sm: 576px;
$grid-breakpoints-md: 768px;
$grid-breakpoints-lg: 992px;
$grid-breakpoints-xl: 1200px;
$grid-breakpoints-xxl: 1400px;
  .hero-articles {

}

.article {
  display: block;
  position: relative;
  max-width: 380px;
  margin: 0 auto 40px;
  background: #f0e68c99;
  border-radius: 16px;
  padding: 8px 8px 32px;

  .image {
    margin-bottom: 16px;
    .cate {
      background: rgba(black, .4);
      border-radius: 32pc;
      color: greenyellow;
      padding: 4px 8px;
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 12px;
      font-weight: 900;
    }
  }

  .text {
    padding: 0 8px;
    .title{
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 8px;
    }

    .desc {
      font-size: 16px;
      font-weight: 500;
    }
  }
}

@media screen and (min-width: $grid-breakpoints-sm) { 
  .hero-articles {
      display: flex;
      flex-wrap: wrap;
      gap: 24px
  }
  .article {
    width: calc(50% - 12px);
  .image {

    .cate {

    }
  }

  .text {
    .title{

    }

    .desc {

    }
  }
}
}

@media screen and (min-width: $grid-breakpoints-md) { 
  .hero-articles {
      display: flex;
      flex-wrap: wrap;
      gap: 24px
  }
  .article {
    width: calc(25% - 18px);
  .image {

    .cate {

    }
  }

  .text {
    .title{

    }

    .desc {

    }
  }
}
}
</style>