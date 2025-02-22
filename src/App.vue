<script setup lang="ts">

</script>

<template>

  <div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
    </nav>
  </div>


  <RouterView />
  
</template>

<style scoped>

  nav {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
