<script lang="ts">
    import TopBar from  '@/components/home/TopBar.vue';
    import InvoiceList from '@/components/home/InvoiceList.vue';
    import  InvoiceForm from '@/components/shared/InvoiceForm.vue';
    import {  useFormStore } from '../stores/form';

    export  default {
        components: {TopBar, InvoiceList, InvoiceForm},
        data() {
            return {
                showForm: false
            }
        },
        methods: {
            toggleForm() {
                this.showForm  = !this.showForm;
            }
        }
    }
</script>

<script lang="ts" setup>
    import { useThemeStore } from  '../stores/theme';

    import  { storeToRefs } from 'pinia';

    const  themeStore  = useThemeStore();
    const { getThemeMode } = storeToRefs(themeStore);
    const formStore = useFormStore();

    const { sidebarMode } = storeToRefs(formStore);

</script>
<template>
    <div class="home-container" :class="getThemeMode == 'dark' ? 'dark-home' : ''">
        <TopBar :toggle="() => formStore.isActive = !formStore.isActive"/>
        <InvoiceList />
    </div>
        <InvoiceForm :toggle="() => formStore.isActive = !formStore.isActive" :show="sidebarMode" v-if="sidebarMode" />
</template>


<style lang="scss" scoped>
@import "../scss/_variables.scss";
.home-container  {
  background-color: $whisper;
  padding-bottom: 6rem;
  padding-top: 6.5rem;
  min-height: 100vh;
  @media (min-width: $tablet) {
    padding-top: 4.5rem;
  }

  @media (min-width: $desktop) {
    padding-left: 6.4375rem;
    padding-top: 0;
  }
}

.dark-home {
    background-color: $mirage2;
}
</style>