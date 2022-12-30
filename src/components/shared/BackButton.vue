<script lang="ts">
    
</script>

<template>
    <div class="button-container">
        <button class="back-button dark-button">
            <img src="../../assets/icons/icon-arrow-left.svg"/>
            <span>Go back</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .button-container {
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
