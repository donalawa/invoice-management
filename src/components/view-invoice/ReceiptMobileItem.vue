<script>
    import Fragement from '../ui/Fragment.vue';
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
        components: { Fragement }
    }
</script>

<template>
        <div class="item-container">
            <div>
                <p class="item-name">Brand Guidelines</p>
                <p class="item-price">$1,800.90</p>
            </div>
            <div>
                <p class="item-total">$1,800.90</p>
            </div>
        </div>
       
</template>

<style lang="scss" scoped>
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .item-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.75rem;
    }

    .item-name, .item-price, .item-total {
        @include normalText;
        font-weight: bold;
    }

    .item-name {
        margin-bottom: 0.75rem;

        @media (min-width: $tablet) {
            margin-bottom: 0;
        }
    }

</style>