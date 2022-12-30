<script lang="ts">
    import Button from '../ui/Button.vue';

    export default {
        props: ['onEdit'],
        components: {Button},
    }
</script>

<template>
    <div class="buttons-container">
        <Button :type="'secondary'" :onClick="onEdit">
            Edit
        </Button>

        <Button :type="'btn-orange'">
            Delete
        </Button>

        <Button :type="'primary'">
            Mark as Paid
        </Button>

    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .buttons-container  {
        display: flex;

        button {
            margin-right: 0.5rem;
            &:last-child {
            margin-right: 0;
            }
        }
    }
</style>