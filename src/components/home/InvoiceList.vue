<script lang="ts">
    import Heading from '@/components/ui/HeadingText.vue';
    import InvoiceItem from  './InvoiceItem.vue';
    import  Fragment from '../ui/Fragment.vue';

    export default {
        components: {Heading, InvoiceItem, Fragment},
        data() {
            return {
                invoices: ['ok']
            }
        }
    }
</script>
<script lang="ts" setup>

    import { useScreenStore } from '../../stores/screen';
    import { useThemeStore } from  '../../stores/theme';

    import  { storeToRefs } from 'pinia';

    const store = useScreenStore();
    const  themeStore  = useThemeStore();

    const { getDeviceType } = storeToRefs(store);
    const { getThemeMode } = storeToRefs(themeStore);

</script>

<template>
    <div v-if="invoices.length == 0" class="list-container" :class="getThemeMode == 'dark' ? 'list-dark' : ''">
        <Heading  :type="'h2'">No Invoices</Heading>
        <p class="no-invoice">Create your first invoice</p> 
    </div> 
    <Fragment v-else>
        <div class="invoices-list">
            <InvoiceItem :status="'draft'"/>
            <InvoiceItem :status="'paid'"/>
            <InvoiceItem :status="'pending'"/>
        </div>
    </Fragment>

</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .list-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 16rem;
        padding: 0.9375rem;
        img {
            margin-bottom: 3rem;
        }
        h2 {
            margin-bottom: 1.5rem;
            text-align: center;
            color: $vulcan;
  }
    }

    .list-dark {
        color: white;

        h2  {
            color: white;
        }
    }

    .no-invoice {
        @include normalText();
        text-align: center;
        color: $baliHai;
    }

    .invoices-list {
        @include container;
        margin-top: 1.5rem;
    }


</style>>
