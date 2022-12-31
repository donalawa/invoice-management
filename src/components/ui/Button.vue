<script lang="ts">
    import { useScreenStore } from '../../stores/screen';
    import { useThemeStore } from  '../../stores/theme';
    import  { storeToRefs } from 'pinia';

    export default {
        setup() {
            const store = useScreenStore();
            const  themeStore  = useThemeStore();

            const { getDeviceType } = storeToRefs(store);
            const { getThemeMode } = storeToRefs(themeStore);
            return { getThemeMode, getDeviceType }
        },
        props: ['type','onClick','isDisabled', 'isInvoiceAdd']
    }
</script>

<template>
    <button v-if="type == 'primary'" :disabled="isDisabled" role="button" class="primary-button" :class="getThemeMode == 'dark' ?  '' : ''" @click="onClick"> 
        <slot />
    </button>

    <button v-if="type == 'secondary'" :disabled="isDisabled" role="button" class="secondary-button" :class="getThemeMode == 'dark' ?  'dark-secondary' : ''" @click="onClick"> 
        <slot />
    </button>
    
    <button v-if="type == 'dark'" :disabled="isDisabled" role="button" class="dark-button" :class="getThemeMode == 'dark' ?  'dark-dark' : ''" @click="onClick"> 
        <slot />
    </button>

    <button v-if="type == 'btn-orange'" :disabled="isDisabled" role="button" class="btn-orange" @click="onClick"> 
        <slot />
    </button>

    <button v-if="type == 'btn-large'" :disabled="isDisabled" role="button" class="btn-large" :class="getThemeMode == 'dark' ?  'dark-large' : ''" @click="onClick"> 
        <slot />
    </button>

    <button v-if="type == 'btn-add'" :disabled="isDisabled" role="button" class="btn-add"  :class="[isInvoiceAdd ? 'add-invoice' : '', getThemeMode == 'dark' ?  'btn-add-dark add-invoice-dark' : '']" @click="onClick"> 
        <slot />
    </button>

</template>

<style lang="scss" scoped>
@import '../../scss/globals.scss';
@import '../../scss/_mixins.scss';
@import '../../scss/_variables.scss';

button  {
    margin-left: 5px;
}

.primary-button  {
    @include button;
    background: $purple;
    color: white;

    &:hover {
        background: $heliotrope;
    }
}

.secondary-button  {
    @include button;
    background: #f9fafe;
    color: $shipCove;

    &:hover {
        background: $selago;
    }
}

.dark-secondary {
  @include button;
  background: $ebony;
  color: white;

  &:hover {
    background-color: white;
    color: $selago;
  }
}

.dark-button {
  @include button;
  background: #373b53;
  color: $baliHai;

  &:hover {
    background: $vulcan;
  }
}

.dark-dark {
  color: white;

  &:hover {
    background-color: $mirage;
  }
}

.btn-orange {
    @include button;
    background: $burntSienna;
    color: white;

    &:hover {
        background: #ff9797;
    }
}

.btn-large {
    @include button;
    background: #f9fafe;
    color: $shipCove;
    width: 100%;
}

.dark-large {
      background: $mirage;
}

.btn-add {
  @include button;
  background: #f9fafe;
  color: $shipCove;
  width: 100%;
}

.btn-add-dark {
    background: $mirage;
    color: $shipCove;
}



.add-invoice-dark {
        color: white !important;
        background: $mirage;
        svg path {
            fill: white;
        }
    }
</style>
