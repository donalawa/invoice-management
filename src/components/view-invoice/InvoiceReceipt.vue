<script lang='ts'>
    import Fragement from  '../ui/Fragment.vue';
    import  HeadingText from '../ui/HeadingText.vue';
    import  ReceiptMobileItem from './ReceiptMobileItem.vue';
    
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
        components: { Fragement, HeadingText, ReceiptMobileItem },
        data() {
            return {
                isMobile: true
            }
        }
    }
</script>

<template>
    <Fragement>
        <Fragement v-if="getDeviceType == 'phone'">
            <div class="mobile-container" :class="getThemeMode == 'dark' ?  'mobile-container-dark' : ''">
                <div class="spacer">
                    <ReceiptMobileItem />
                    <ReceiptMobileItem />
                </div>
                <div class="sub-total-container "  :class="getThemeMode == 'dark' ? 'sub-total-dark' : ''">
                    <p class="total-label">Grand Total</p>
                    <HeadingText :type="'h2'">
                        $556.00
                    </HeadingText>
                </div>
            </div>
        </Fragement>
        <Fragement v-if="getDeviceType != 'phone'">
        <table class="receipt-container" :class="getThemeMode == 'dark' ? 'dark-container' : ''">
            <thead>
                <tr>
                    <td>Item Name</td>
                    <td>QTY.</td>
                    <td>Price</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Brand Guidelines</td>
                    <td class="light-text">1</td>
                    <td class="light-text">$1,800.90</td>
                    <td class="light-text">$1,800.90</td>
                </tr>
                <tr>
                    <td>Brand Guidelines</td>
                    <td class="light-text">1</td>
                    <td class="light-text">$1,800.90</td>
                    <td class="light-text">$1,800.90</td>
                </tr>
            </tbody>
        </table>
        <div class="receipt-total " :class="getDeviceType == 'dark' ? 'dark-total' : ''">
            <p class="total-label">
                Amount Due
            </p>
            <HeadingText :type="'h2'">$1,800.90</HeadingText>
        </div>
        </Fragement>
    </Fragement>
</template>

<style lang="scss" scoped> 
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

.receipt-container {
    width: 100%;
    padding: 2rem;
    background: #f9fafe;
    border-radius: 0.5rem 0.5rem 0 0;

    thead tr td {
        @include smallText;
        color: $shipCove  !important;
        font-weight: 500;
        &:first-child {
        text-align: left;
        }
        text-align: right;
    }

    tbody tr td {
        @include smallText;
        text-align: right;

        &:first-child {
        @include normalText;
        font-weight: bold;
        text-align: left;
        // color: #000;
        }
    }

    thead::after {
        height: 1.25rem;
        display: table-row;
        content: "";
    }

    tbody tr {
        &:after {
        height: 2.5rem;
        display: table-row;
        content: "";
        }
    }
    }

    .dark-container {
        background-color: $ebony;
        color: white;

        thead tr td {
            color: white; 
        }

        tbody tr td {
            color: white;
        }

        
    }

    .receipt-total {
        padding: 2rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $otherDark;
        color: white;
        border-radius: 0 0 0.5rem 0.5rem;
    }

    .dark-total {
        background-color: $vulcan;
    }


    .mobile-container {
        width: 100%;
        background-color: $offWhite;  
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .mobile-container-dark {
        background-color: $ebony;
    }
    
    .spacer {
        padding: 1.5rem 1.5rem 0 1.5rem;
    }

    .sub-total-container {
        padding: 2rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $otherDark;
        color: white;
        border-radius: 0 0 0.5rem 0.5rem;
    }

    .sub-total-dark {
        background-color: $vulcan;
    }

        .total-label {
        @include smallText;
    }

    .light-text {
        @include normalText;
        font-weight: bold;
        color: $shipCove !important;
    }


</style>