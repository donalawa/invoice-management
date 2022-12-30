<script lang="ts">
    import Input from '../ui/Input.vue';
    import DeleteItem from '../icons/DeleteIcon.vue';

    export default {
        components: { Input, DeleteItem }
    }
</script>

<template>
    <div class="item-container">
        <!-- <Input /> -->
        <Input :label="'Item Name'" :isName="true"/>
        <div class="item-row">
            <Input :type="'number'" :value="0" :label="'Qty.'"/>
            <Input :type="'number'" :value="0" :label="'Price'"/>
            <Input :type="'number'" :value="0" :label="'Total'"/>
            <button class="delete-item">
                <DeleteItem  />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .item-row {
        display: grid;
        place-items: center;
        justify-items: center;
        grid-template-columns: 25% 25% 0.9fr 0.9fr;
        column-gap: 1rem;
        margin-bottom: 3rem;
        input {
            padding-right: 0rem;
        }

        input:disabled {
            border: none;
            background: none;
            color: $shipCove;
            text-align: right;
            padding: 0;
        }
        button {
            border: none;
            background: none;
        }

        @media (min-width: $tablet) {
            margin-bottom: 1rem;

            div {
            margin-bottom: 1rem;
            }
        }
    }

    .dark-row {
        input:disabled {
            color: white;
        }
    }

    .delete-item {
        svg {
            fill: $shipCove;
        }
        &:hover {
            svg {
            transition: 0.3s ease;
            fill: $burntSienna;
            }
        }
    }

    .item-container {
          display: block;

        @media (min-width: $tablet) {
            display: flex;
        }
    }

</style>>