<script setup lang="ts">
import Header from '@/components/shared/Header.vue';
import Home from  '@/views/Home.vue';
import { onMounted } from 'vue-demi';
import { RouterLink, RouterView } from 'vue-router'
  
</script>

<script lang="ts">
  import { useScreenStore } from './stores/screen';

  export default {
    methods: {
      windowResized() {
        const store = useScreenStore();
        store.deviceSize  = window.innerWidth;
      }
    },

    mounted() {
      window.addEventListener('resize', this.windowResized);
    },
    unmounted() {
      window.removeEventListener('resize', this.windowResized);
    },
  }
</script>
<template>
  <Header  />
  <!-- <Home /> -->
  <RouterView />
</template>

<style lang="scss">
@import './scss/globals.scss';
@import './scss/_variables.scss';

</style>
