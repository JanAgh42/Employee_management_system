<template>
  <NavigationComp/>
  <div class="wrapper flex">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <teleport to='#modal-container'>
        <ConfirmDialog v-if="confirmModal"/>
    </teleport>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  import NavigationComp from './components/NavigationComp.vue';
  import ConfirmDialog from './modals/ConfirmDialog.vue';

  const store = useStore();

  store.dispatch('GET_CURRENT_EMP_DATA');

  const confirmModal = computed(() => store.state.DialogManager.confirmDialogVisibility);

</script>

<style lang="scss">
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
</style>
