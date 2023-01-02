<script lang="ts">
    import InvoiceStatus from  '../shared/InvoiceStatus.vue';

    export default {
        components: {InvoiceStatus},
        props: {
            status: String
        },
        data() {
            return {
                phone: true
            }
        },
        methods: {
            changePage(){
                this.$router.push({ path: '/invoice/RT3080' })
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
    <div class="item-container  " :class="getThemeMode == 'dark' ? 'item-dark' : ''" @click="changePage">
        <div class="item-overview">
            <p class="itemId">
                <span>#</span>
                RT3080
            </p>
            <p v-if="getDeviceType == 'phone'" class="client-name   " :class="getThemeMode == 'dark' ? 'dark-text' : ''" >John Doe</p>
            <p v-if="getDeviceType != 'phone'" class="invoice-date " :class="getThemeMode == 'dark' ? 'dark-text' : ''" >Due 19 Aug 2021</p>
        </div>
        <div class="invoice-info">
            <div class="date-mount-wrapper">
                <p v-if="getDeviceType == 'phone'" class="invoice-date  " :class="getThemeMode == 'dark' ? 'dark-text' : ''" >Due 19 Aug 2021</p>
                <p v-if="getDeviceType != 'phone'" class="client-name " :class="getThemeMode == 'dark' ? 'dark-text' : ''" >John Doe</p>
                <p class="invoice-amount" :class="getThemeMode == 'dark' ? 'amount-dark' : ''" >$22,000</p>
            </div>
            <div class="status-wrapper">
                <InvoiceStatus :status="status"/>
                <img src="../../assets/icons/icon-arrow-right.svg" alt="Right Arrow Icon" />
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .item-container {
        width: 100%;
        background: white;
        margin-bottom: 1rem;
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
        cursor: pointer;
        transition: 0.3s ease;
        border: 1px solid rgba(0, 0, 0, 0);

        &:hover {
            box-shadow: none;
            border: 1px solid $purple;
        }

        @media (min-width: $tablet) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .item-dark  {
          background: $mirage;
          color: white;
    }

    .item-overview {
          display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.625rem;

        @media (min-width: $tablet) {
            margin-bottom: 0;
            margin-right: 2rem;
        }
    }

    .itemId {
        @include normalText();
        font-weight: bold;
        span {
            color: $shipCove;
        }

        @media (min-width: $tablet) {
            margin-right: 1.75rem;
        }
    }

    .client-name {
        @include normalText();
        color: $baliHai;

        @media (min-width: $tablet) {
        }
    }

    .invoice-date {
        margin-bottom: 0.25rem;
        @include smallText();
        color: $shipCove;
        @media (min-width: $tablet) {
            margin-bottom: 0;
        }
    }

    .dark-text {
         color: white;
    }

    .invoice-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (min-width: $tablet) {
            // margin-right: 1.75rem;
            justify-content: space-between;
            width: 60%;
        }
    }

    .date-mount-wrapper {
        color: $shipCove;

        @media (min-width: $tablet) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
    }

    .invoice-amount {
        font-size: 1rem;
        line-height: 2rem;
        color: $mirage;
        font-weight: bold;
        letter-spacing: -0.8px;
    }

    .amount-dark {
        color: #fff;
    }

    .status-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        img {
            margin-left: 1rem;
            display: none;

            @media (min-width: $tablet) {
            display: inline-block;
            }
        }
    }

</style>>
