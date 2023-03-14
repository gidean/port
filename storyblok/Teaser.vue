<template>
  <div v-editable="blok">
    <h1> {{ blok.headline }}</h1>
    <p> this is a teaser</p>

  </div>

</template>

<script setup>
  defineProps({ blok: Object})
</script>