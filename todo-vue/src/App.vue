<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
</script>

<template>

  <header>

    <Menu />

  </header>

  <RouterView />

</template>

<style scoped>

</style>
