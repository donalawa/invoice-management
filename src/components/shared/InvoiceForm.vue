<script lang="ts">
import Heading from '../ui/HeadingText.vue';
import Input from '../ui/Input.vue';

    interface formInterFace {
        streetAddress: any
    }

    export default {
        components: {Heading, Input},
        props: ['toggle','show'],
        data() {
            return {
                isEditing: false,
                form: {
                    streetAddress: 'Hello' as any
                } as formInterFace
            }
        },

        methods: {
            updateFieldValue(name: String, value: any) {
                this.form.streetAddress = value;
                
                console.log(name);
                console.log(value);
            }
        }
    }
</script>

<template>
    <div class="form-container form-dark" :style="{ 'transform': show ? 'translateX(0%)' : 'translateX(-100%)' }">
        <form class="form-content content-dark">
            <div class="spacer">
                <Heading :type="'h1'">
                    {{isEditing ? "Edit  Invoice #53423" : "New  Invoice"}}
                </Heading>
                <p class="form-section-title">Bill From</p>
                <Input :label="'Street Address'" :updateValue="updateFieldValue" :name="'streetAddress'" :value="form.streetAddress" />
            </div>
            <!-- <p>{{ form.streetAddress }}</p> -->
        </form>
    </div>
    <div class="overlay" :style="{'transform': show ? 'translateX(0%)' : 'translateX(-100%)'}" @click="toggle">

    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .form-container {
        position: fixed;
        left: 0;
        top: 4.5rem;
        height: calc(100vh - 4.5rem);
        bottom: 0;
        background-color: white;
        width: 100%;
        transition: transform 0.3s ease;
        z-index: 2;
        overflow-y: auto;
        @media (min-width: $tablet) {
            max-width: 619px;
            border-radius: 0px 1.25rem 1.25rem 0;
        }

        @media (min-width: $desktop) {
            max-width: calc(719px + 6.4375rem);
            top: 0;
            left: 0;
            padding-left: 6.4375rem;
            height: 100vh;
        }

        h1 {
            font-size: 1.5rem;
        }
    }
    
    .form-dark {
          background-color: $mirage2;
          color: white;
    }

    .form-section-title {
        @include normalText;
        color: $purple;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }


    .form-content  {
          position: relative;
        h1 {
            color: $vulcan;
            margin-bottom: 1.5rem;
            span {
            color: $shipCove;
            }
        }

        @media (min-width: $tablet) {
            padding-top: 1.5rem;
        }
    }

    .content-dark {
          h1 {
                color: white;
        }
    }

    .overlay {
        background: rgba(0, 0, 0, 0.4984);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 1;
    }

    .spacer {
        padding: 0 1.5rem;
    }

</style>>