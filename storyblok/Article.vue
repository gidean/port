<template lang="pug">
.container
  div.full-art(v-editable='blok')
    .heading-blok
      .category {{ blok.cat }}
      h1.title {{ blok.title }}
      h2.desc {{ blok.desc }}
      .author-blok {{ blok.author }} - {{ blok.date }}
    img(:src="blok.image.filename + '/m/1600x0'", :alt='blok.image.alt', class='hero')
    Vue3RuntimeTemplate(:template="resolvedRichText")
</template>
 
<script setup>
  import Vue3RuntimeTemplate from "vue3-runtime-template"
  const props = defineProps({ blok: Object })
  console.log(props.blok)
  const resolvedRichText = computed(() => renderRichText(props.blok.content, {
    resolver: (component, blok) => {
      return `<component :blok='${JSON.stringify(blok)}' is="${component}" />`
    },
  }))
</script>

<style lang="scss">
.full-art {
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;

  .heading-blok {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 24px 0;
  }
  .author-blok {
    font-size: 14px;
    font-weight: 300;
    opacity: .65;
  }

  .category {
    font-size: 12px;
    background: lime;
    padding: 4px 8px;
    display: inline;
    border-radius: 4px;
    width: fit-content;
  }

  .title {
    font-size: 24px;
    font-weight: 900;
    margin: 0;
  }

  .desc {
    font-size: 16px;
    font-weight: 300;
    opacity: .65;
    margin: 0;
  }

  .hero {
    margin: 0 0 24px;
  }


  blockquote {
    color: #f7fafc;
    background-color: #2d3748;
    border-radius: 8px;
    padding: 32px 32px 16px;
    margin: 32px 0 16px;
  }


  h1,h2,h3,h4,h5,h6 {
    margin: 32px 0 16px;
    p,
    b {
    font-size: 20px;
    font-weight: 900;
    }
  }

  p {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 300;
  }

  code {
    color: #f7fafc;
    background-color: #2d3748;
    border-width: 0;
    border-width: 0;
    border-radius: 0;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    font-family: monospace;
    line-height: inherit;
  }
}
</style>