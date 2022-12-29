<script lang="ts">
    export default {
        props:['name','value', 'label', 'updateValue']
    }
</script>

<template>
    <div class="input-container dark-input">
        <label class="label-text" for="name">{{ label }}</label>
        <label class="error-text" for="">Field Requred</label>
        <input class="input-field " :value="value" @keyup="(e) => updateValue(name, e.target.value)" type="text" placeholder="Enter name">
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .input-container {
        margin-bottom: 1.5rem;
        position: relative;
    }

    .input-field {
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

    .dark-input {
          label {
            color: white;
        }
        input {
            color: white;
            background-color: $mirage;
            border: 1px solid $ebony;
        }
    }

    .label-text {
        display: block;
        margin-bottom: 0.75rem;
        @include normalText;
        color: $shipCove;
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