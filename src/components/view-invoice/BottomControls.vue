<script lang="ts">
    import ActionControl from './ActionControl.vue';

    export default  {
        components: { ActionControl }
    }
</script>

<template>
    <div class="mobile-control-container controls-dark">
        <ActionControl />
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .mobile-control-container {
        width: 100%;
        position: fixed;
        bottom: 0;
        background: white;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .controls-dark {
        background-color: $mirage;
        color: white;
    }
</style>