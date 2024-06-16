<script setup>
defineOptions({
  inheritAttrs: false
})

</script>

<template>
      <RouterLink class="router-link " v-bind="$attrs"  >
        <slot> {{ $attrs }} </slot>
      </RouterLink>
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

.router-link {
    color: white;
}

</style>
