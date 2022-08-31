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
    <teleport to='#modal-container'>
        <ArchiveDialog v-if="archiveModal"/>
    </teleport>
</template>

<script setup lang="ts">
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import NavigationComp from './components/NavigationComp.vue';
    import ConfirmDialog from './modals/ConfirmDialog.vue';
    import ArchiveDialog from './modals/ArchiveDialog.vue';

    const store = useStore();

    store.dispatch('GET_CURRENT_EMP_DATA');

    const confirmModal = computed(() => store.state.DialogManager.confirmDialogVisibility);
    const archiveModal = computed(() => store.state.DialogManager.archiveDialogVisibility);
</script>

<style lang="scss">
  .container {
    max-width: 1500px;
    flex-direction: column;
    margin: 0 100px;
  }

  .wrapper {
    justify-content: center;
  }
</style>
