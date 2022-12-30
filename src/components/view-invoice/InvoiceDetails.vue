<script lang="ts">
    import  Heading  from  '../ui/HeadingText.vue';
    import InvoiceReceipt  from '../view-invoice/InvoiceReceipt.vue';
    
    export default {
        components: { Heading, InvoiceReceipt }
    }
</script>

<template>
    <div class="details-container dark-container ">
        <div class="details-top">
            <div>
                <p class="invoice-id text-light">
                    <span>#</span>
                    RT3080
                </p>
                <p class="invoice-description text-light">
                    Re-branding
                </p>
            </div>
            <div class="invoice-address">
                <p>19 Union Terrace</p>
                <p>London</p>
                <p>E1 3EZ</p>
                <p>United Kingdom</p>
            </div>
        </div>
        <div class="billing-container">
            <div class="date-info">
                <p class="label-style text-light">Invoice Date</p>
                <Heading :type="'h3'">
                    18 Aug 2021
                </Heading>

                <p class="label-style text-light">Payment Due</p>
                <Heading :type="'h3'">
                    19 Aug 2021
                </Heading>
            </div>

            <div class="date-info">
                <p class="label-style text-light">Bill To</p>
                <Heading :type="'h3'">
                    Jensen Huang
                </Heading>

                <div class="invoice-address">
                    <p>19 Union Terrace</p>
                    <p>London</p>
                    <p>E1 3EZ</p>
                    <p>United Kingdom</p>
                </div>
            </div>

            <div class="date-info">
                <p class="label-style text-light">Sent To</p>
                <Heading :type="'h3'">
                    jensenh@mail.com
                </Heading>
            </div>
        </div>  
        <!-- RECEIPT -->
        <InvoiceReceipt  />

    </div>
</template>

<style lang="scss" scoped>   
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .details-container {
        padding: 1.5rem;
        box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.1004);
        background: white;
        @include container;
        margin-top: 1rem;
        border-radius: 0.5rem;
    }

    .dark-container {
        background: $mirage;
        color: white;

        * {
            color: white;
        }
    }

    .details-top {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 2rem;
        @media (min-width: $tablet) {
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .invoice-id {
        color: $vulcan;
        @include normalText;
        font-weight: bold;
        margin-bottom: 0.5rem;
        span {
            color: $shipCove;
        }
    }

    .invoice-description {
        @include normalText;
        color: $shipCove;
        margin-bottom: 2rem;

        @media (min-width: $tablet) {
            margin-bottom: 0;
        }
    }

    .invoice-address {
        @include smallText;
        color: $shipCove;

        p {
            margin-bottom: 0.25rem;
        }
    }

    .billing-container {
        display: flex;
        align-items: flex-start;
        flex-flow: row wrap;
        margin-bottom: 2.5rem;
    }

    .date-info {
        color: $vulcan;
        margin-right: 2.75rem;
        h3 {
            margin-bottom: 2rem;
        }

        @media (min-width: $tablet) {
            margin-right: 5rem;
        }

        @media (min-width: $desktop) {
        }
    }

    .label-style {
        @include normalText;
        color: $shipCove;
        margin-bottom: 1rem;
    }

    .text-light {
        color: #fff;
    }
</style>