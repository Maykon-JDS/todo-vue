<script setup>
import RouterLinkButton  from './button/RouterLinkButton.vue'
</script>

<template>
  <div class="menu">
    <nav>
      <RouterLinkButton to="/">To-Do</RouterLinkButton>
      <RouterLinkButton to="/sobre">Sobre</RouterLinkButton>
    </nav>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d1117;
  height: 50px;
  border-bottom: #30363d 2px solid;
}
.menu nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

</style>

<!-- <template>

    <a>{{ msg }}</a>
    <slot name="teste"></slot>
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
</template> -->
