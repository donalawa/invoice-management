<script lang="ts">
    import TopBar from  '@/components/home/TopBar.vue';
    import InvoiceList from '@/components/home/InvoiceList.vue';
    import  InvoiceForm from '@/components/shared/InvoiceForm.vue';

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
<template>
    <div class="home-container dark-home">
        <TopBar :toggle="toggleForm"/>
        <InvoiceList />
    </div>
        <InvoiceForm :toggle="toggleForm" :show="showForm" v-if="showForm" />
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