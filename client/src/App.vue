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

<style lang="scss">
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

.button {
  border: transparent;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

.primary-button {
  border-radius: 10px;
  background-color: rgb(18, 107, 196);
  max-width: 200px;

  &:hover {
    background-color: rgb(15, 94, 173);
  }
}

.misc-button {
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(182, 182, 182);

  &:hover {
    background-color: rgb(151, 151, 151);
  }     
}

.delete-button {
  padding: 10px;
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
    border: 1px solid black;
    background-color: rgb(68, 144, 221);
    color: rgb(255,255,255);
  }
}

.entry-name {
  text-decoration: none;
  font-weight: 600;
  color: black;
}

</style>
