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
      props: ['onClick']
    }
</script>

<template>
    <div class="back-button-container">
        <button class="back-button" @click="onClick" :class="getThemeMode == 'dark' ? 'dark-button' : ''">
            <img src="../../assets/icons/icon-arrow-left.svg"/>
            <span>Go back</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .back-button-container {
        padding: 2rem 0;
        @include container;
    }

    .back-button {
        background: none;
        border: none;
        @include normalText();

        span {
            font-weight: bold;
        }

        img {
            margin-right: 1rem;
        }

        &:hover,
        &:focus {
            color: $baliHai;
        }
    }

    .dark-button {
        color: white;
        &:hover,
        &:focus {
            color: $baliHai;
        }
    }

</style>
