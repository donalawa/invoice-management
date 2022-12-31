<script lang="ts">
    import InvoiceStatus from '../shared/InvoiceStatus.vue';
    import ActionControl from './ActionControl.vue';
    
    import { useScreenStore } from '../../stores/screen';
        import { useThemeStore } from  '../../stores/theme';
    import  { storeToRefs } from 'pinia';

    export default {
        setup() {
            const store = useScreenStore();
            const  themeStore  = useThemeStore();

            const { getDeviceType } = storeToRefs(store);
            const { getThemeMode } = storeToRefs(themeStore);
            return { getThemeMode, getDeviceType }
        },
        props: ['editModal'],
        components: {InvoiceStatus, ActionControl},
    }
</script>

<script lang="ts" setup>
    
</script>

<template>
    <div class="container" :class="getThemeMode  == 'dark' ? 'dark-container' : ''">
        <div class="info-container">
            <p class="status-text">Status</p>
            <InvoiceStatus :status="'paid'"/>
        </div>
        <ActionControl v-if="getDeviceType != 'phone'" :onEdit="editModal"/>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        margin: 0 auto;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.1004);
        @include container;
    }

    .dark-container {
        background-color: $mirage;

        .status-text {
            color: white;
        }
    }

    .info-container {   
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        @media (min-width: $tablet) {
            justify-content: flex-start;
        }
    }

    .status-text {
          @include normalText;
          color: $baliHai;
    }
</style>