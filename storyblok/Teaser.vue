<template lang="pug">
div(v-editable='blok')
  h1  {{ blok.headline }}
  p  this is a teaser
</template>

<script setup>
defineProps({ blok: Object });
</script>
