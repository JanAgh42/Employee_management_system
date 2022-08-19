<script setup lang="ts">
  import NavigationComp from './components/NavigationComp.vue';

</script>

<template>
  <NavigationComp/>
  <div class="wrapper flex">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.flex {
  display: flex;
}

.column {
  flex-direction: column;
}

.container {
  max-width: 1500px;
  flex-direction: column;
  margin: 0 100px;
}

.wrapper {
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
