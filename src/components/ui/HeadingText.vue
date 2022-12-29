<script lang="ts">
    export default {
        props: {
            type: String
        }
    }
</script>

<template>
    <h1 v-if="type == 'h1'"><slot /></h1>
    <h2 v-else-if="type == 'h2'"><slot /></h2>
    <h3 v-else-if="type == 'h3'"><slot /></h3>
    <h4 v-else-if="type == 'h4'"><slot /></h4>
    <h4 v-else><slot /></h4>
</template>