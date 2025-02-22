<script setup lang="ts">

</script>

<template>

  <v-app theme="dark">
    <v-app-bar :elevation="2">

      <v-app-bar-title>Application Bar</v-app-bar-title>

      <v-btn class="mx-1" prepend-icon="mdi-account" variant="tonal" color="primary" to="/">
          Home
      </v-btn>

      <v-btn class="mx-1"  prepend-icon="mdi-food" variant="tonal" color="primary" to="/products">
          products
      </v-btn>

    </v-app-bar>


    <v-main>
      <v-container>
        <v-row>
          <RouterView />
        </v-row>
      </v-container>
    </v-main>
  </v-app>


  
</template>

<style scoped>

  nav {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
