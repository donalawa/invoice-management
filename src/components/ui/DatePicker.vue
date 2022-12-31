<script lang="ts">
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
        props:['name','value', 'label', 'updateValue','errors']
        
    }
</script>

<template>
    <div class="" :class="getThemeMode == 'dark' ? 'dark' : ''">
        <label class="label-text" for="name">{{ label }}</label>
        <label class="error-text" v-for="(error, index) of errors" :key="index" for="">{{ error.$message }}</label>
        <input @change="(e) => updateValue(name, e.target.value)" :value="value" class="date-field" :class="getThemeMode == 'dark' ? 'dark-date' : ''" type="date">
    </div>
</template>  

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .date-field {
        width: 100%;
        height: 3rem;
        padding: 0 1.125rem;
        border-radius: 0.25rem;
        border: 1px solid $selago;
        @include normalText;
        font-weight: bold;

        &:focus {
            border: 1px solid $purple;
        }
    }


    .label-text {
        display: block;
        margin-bottom: 0.75rem;
        @include normalText;
        color: $shipCove;
    }

    .dark-date {
        color: white;
        background-color: $mirage;
        border: 1px solid $ebony;
        color-scheme: dark;
    }

    .dark {
        label {
            color: white;
        }
    }


    .error-text {
       
        letter-spacing: -0.21px;
        line-height: 0.9375rem;
        position: absolute;
        font-size: 0.625rem;
        right: 0%;
        top: -1%;
         color: #ec5757 !important;
    }
</style>