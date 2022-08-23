<template>
  <NavigationComp/>
  <div class="wrapper flex">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex';
  import NavigationComp from './components/NavigationComp.vue';

  const store = useStore();

  store.dispatch('RETRIEVE_DATA');

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Ubuntu', sans-serif;
  background: rgb(1,145,103);
  background: linear-gradient(196deg, rgba(1,145,103,1) 0%, rgba(11,172,124,1) 30%, rgba(64,255,198,1) 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button {
  cursor: pointer;
  border: transparent;
  padding: 10px 20px;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

.primary-button {
  border-radius: 5px;
  font-weight: bold;
  color: #0bac7c;
  background-color: rgb(255, 255, 255);
  max-width: 200px;

  &:hover {
    background-color: rgb(236, 236, 236);
  }
}

.misc-button {
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.6);

  &:hover {
    background-color: rgb(255, 255, 255);
    color: #0bac7c;
  }     
}

.delete-button {
  border-radius: 5px;
  background-color: rgb(255, 0, 0);

  &:hover {
    background-color: rgb(212, 2, 2);
  }
}

.table-content {
  justify-content: center;
  margin-top: 20px;

  th {
    padding: 10px 50px;
    background-color: rgba(255, 255, 255, 0.4);
    color: rgb(255,255,255);
    border-bottom: none;
  }
}

.entry-name {
  text-decoration: none;
  font-weight: 600;
  color: black;
}

h1, h4 {
  color: rgb(255, 255, 255);
}

</style>
