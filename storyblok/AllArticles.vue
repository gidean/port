<template lang="pug">
main
  .container
    h3.h3-hero {{ blok.headline }}
    p.p-hero {{ blok.subHeading }}
    .hero-articles
      ArticleCard(v-for="article in articles"
                  :key="article.uuid"
                  :article="article.content"
                  :slug="article.full_slug")
  </template>

<script setup>
  defineProps({ blok: Object})

  const articles = ref(null)
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'blog',
    is_startpage: false
  })
  articles.value = data.stories
</script>

<style lang="scss">
$grid-breakpoints-xs: 0;
$grid-breakpoints-sm: 576px;
$grid-breakpoints-md: 768px;
$grid-breakpoints-lg: 992px;
$grid-breakpoints-xl: 1200px;
$grid-breakpoints-xxl: 1400px;

.h3-hero {
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    margin: 40px 0 24px; 
  }

  .p-hero {
    font-size: 18px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px;
  }

@media screen and (min-width: $grid-breakpoints-sm) { 
  .hero-articles {
      display: flex;
      flex-wrap: wrap;
      gap: 24px
  }
}

@media screen and (min-width: $grid-breakpoints-md) { 
  .hero-articles {
      display: flex;
      flex-wrap: wrap;
      gap: 24px
  }
}
</style>