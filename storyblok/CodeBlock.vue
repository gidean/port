<template lang="pug">
div.full-art(v-editable='blok')
  h1 {{ blok.lang }}
  pre(v-highlightjs)
    code.javascript(v-html='resolvedRichText')
</template>

<script setup>
  const props = defineProps({ blok: Object })
  
  const resolvedRichText = computed(() => renderRichText(props.blok.content))
</script>