<script lang="ts">
    import HeadingText from '../ui/HeadingText.vue';
    import FilterDropdown from  '../ui/FilterDropdown.vue';
    import AddButton from '../ui/AddButton.vue';

    export default {
        components: { HeadingText, FilterDropdown, AddButton },
        props: ['toggle'],

    }
</script>

<script lang="ts" setup>

    import { useScreenStore } from '../../stores/screen';
    import { useThemeStore } from  '../../stores/theme';

    import  { storeToRefs } from 'pinia';

    const store = useScreenStore();
    const  themeStore  = useThemeStore();

    const { getDeviceType } = storeToRefs(store);
    const { getThemeMode } = storeToRefs(themeStore);

</script>

<template>
    <div class="bar-container " :class="getThemeMode == 'dark' ? 'bar-container-dark' : ''">
        <div>
            <HeadingText :type="'h1'">
                Invoices
            </HeadingText>
            <p class="overview" v-if="getDeviceType == 'phone'">invoices</p>
            <p v-else class="overview">There are 10 total invoices</p>
        </div>
        <div class="bar-controls">
            <FilterDropdown />
            <AddButton :clicked="toggle"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/globals.scss';
@import '../../scss/_mixins.scss';
@import '../../scss/_variables.scss';


.bar-container {
  @include container;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.25rem;
  p {
    color: $baliHai;
  }

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  @media (min-width: $tablet) {
    margin-bottom: 3.5rem;
    margin-top: 3.5rem;
  }
  @media (min-width: $desktop) {
    margin-top: 0;
    padding-top: 4.5rem;
  }
}

.bar-container-dark {
    p {
    color: white;
  }

    h1 {
        color: white;
    }

    h2 {
        color: white;
    }
}

.overview {
    @include normalText();
}

// bar controls
.bar-controls {
  display: flex;
  align-items: center;
}
</style>>