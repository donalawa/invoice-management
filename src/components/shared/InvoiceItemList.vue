<script lang="ts">
    import  InvoiceItem from './InvoiceItem.vue';
    import Heading from '../ui/HeadingText.vue';
    import Button from  '../ui/Button.vue';

    export default {
        components: { InvoiceItem, Heading, Button }
    }
</script>

<template>
    <div class="list-container">
        <Heading :type="'h2'">Item List</Heading>
        <InvoiceItem  />
        <InvoiceItem  />
        <!-- CREATE NEW  BUTTON HERE -->
        <Button :type="'btn-add'" :isInvoiceAdd="true">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fillRule="nonzero"
            />
            </svg>
            Add New Item
        </Button>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .list-container {
        margin-top: 4.5rem;

        h2 {
            font-size: 1.125rem;
            line-height: 2rem;
            letter-spacing: -0.38px;
            color: #777f98;
            margin-bottom: 1.5rem;
        }

        @media (min-width: $tablet) {
            margin-top: 1.5rem;
        }
    }

    .add-invoice {
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                margin-right: 0.25rem;
            }
            svg path {
                fill: $shipCove;
            }
        }

    .add-invoice-dark {
        color: white !important;
        background: $mirage;
        svg path {
            fill: white;
        }
    }
</style>