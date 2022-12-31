<script lang="ts">  
    import BackButton from '../components/shared/BackButton.vue';
    import InvoiceStatusBar from '../components/view-invoice/InvoiceStatusBar.vue';
    import InvoiceDetails from '../components/view-invoice/InvoiceDetails.vue';
    import BottomControls from '../components/view-invoice/BottomControls.vue';
    import InvoiceForm from  '../components/shared/InvoiceForm.vue';

    export default {
        components: { BackButton, InvoiceStatusBar, InvoiceDetails, BottomControls, InvoiceForm },
        data() {
            return {
                isMobile: false,
                showForm: false
            }
        },

        methods: {
            editInvoice() {
                this.showForm  = !this.showForm;
            }
        }
    }
</script>

<script lang="ts" setup>

    import { useScreenStore } from '../stores/screen';
    import { useThemeStore } from  '../stores/theme';
    import {  useFormStore } from '../stores/form';

    import  { storeToRefs } from 'pinia';

    const store = useScreenStore();
    const themeStore  = useThemeStore();
    const formStore = useFormStore();
    
    const { getDeviceType } = storeToRefs(store);
    const { getThemeMode } = storeToRefs(themeStore);
    const { sidebarMode } = storeToRefs(formStore);
</script>
<template>
    <div class="page-container" :class="getThemeMode == 'dark' ? 'page-dark' : ''">
        <BackButton :onClick="() => this.$router.push({ path: '/' })"/>
        <!-- <p>Device Type: {{ getDeviceType }}</p> -->
        <InvoiceStatusBar :editModal="() => formStore.editInvoice()" />
        <InvoiceDetails />
        <BottomControls :editModal="() => formStore.editInvoice()"  v-if="getDeviceType == 'phone'"/>
        <InvoiceForm :toggle="() => formStore.isActive = !formStore.isActive" :show="sidebarMode" v-if="sidebarMode" />
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/_variables.scss";
    .page-container {
        position: relative;
        background-color: $whisper;
        min-height: 100vh;
        padding-bottom: 6rem;
        padding-top: 4.5rem;

        @media (min-width: $desktop) {
            padding-left: 6.4375rem;
            padding-top: 3rem;
        }
    }

    .page-dark {
        background: $mirage2;
    }
</style>