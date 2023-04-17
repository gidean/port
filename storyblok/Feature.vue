<template lang="pug">
div(v-editable='blok')
  h1  {{ blok.name }}
</template>

<script setup>
  defineProps({ blok: Object})
</script>