<script lang="ts">
    export  default {
        props: {
            status: String
        }
    }
</script>

<template>
    <div v-if="status == 'draft'" class="draft text-dark">
        <span></span>
        <p>Draft</p>
    </div>

    <div v-if="status == 'pending'" class="pending">
        <span></span>
        <p>Pending</p>
    </div>

    <div v-if="status == 'paid'" class="paid">
        <span></span>
        <p>Paid</p>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    $draftBg: rgba(55, 59, 83, 0.0571);
    $paid: #33d69f;
    $paidBg: rgba(51, 214, 159, 0.0571);

.pending,
.draft,
.paid {
        @include normalText();
        display: flex;
        align-items: center;
        height: 2.5rem;
        min-width: 6.5rem;
        justify-content: center;
        font-weight: bold;
        border-radius: 6px;
        span {
            display: inline-block;
            min-width: 0.5rem;
            min-height: 0.5rem;
            border-radius: 50%;

            margin-right: 0.5rem;
        }

        @media (min-width: $tablet) {
            margin-left: 2rem;
        }
    }

    .pending {
        background: $fadedOrange;
        color: $orange;

        span {
            background-color: $orange;
        }
    }

    .draft {
        background: $draftBg;
        color: #373b53;
        span {
            background: #373b53;
        }
    }

    .paid {
        background-color: $paidBg;
        color: $paid;

        span {
            background: $paid;
        }
    }

    .text-dark {
        background: rgba(223, 227, 250, 0.0571);
        color: white;

        span {
            background: white;
        }
    }
</style>>