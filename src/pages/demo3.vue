<script setup>
import son from './son.vue'
</script>

<template>
  <son class="parent" />
</template>

<style scoped>
  .parent:deep(h1){
    color: red;
  }
</style>
