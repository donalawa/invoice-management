<script lang="ts">
    import  CheckBoxItem from './CheckBoxItem.vue';

    export default {
        components: { CheckBoxItem },
        data() {
            return {
                open: false,
                mobile: false
            }
        }
    }
</script>

<template>
    <div>
        <div class="dropdown-container dark-container" @click="open = !open">
           <div>
                <v-template v-if="mobile"> Filter </v-template>
                <v-template v-else> Filter by status </v-template>
                <svg
                width="11"
                height="7"
                xmlns="http://www.w3.org/2000/svg"
                :style="{
                    'transform': open ? 'scaleY(-1)' : 'scaleY(1)',
                }"
                >
                <path
                    d="M1 1l4.228 4.228L9.456 1"
                    stroke="#7C5DFA"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                />
                </svg>
           </div>
        <div class="dropdown dark-dropdown" v-if="open">
            <CheckBoxItem :label="'Draft'" :name="'draft'"/>
            <CheckBoxItem :label="'Pending'" :name="'pending'"/>
            <CheckBoxItem :label="'Paid'" :name="'paid'"/>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_mixins.scss';
@import '../../scss/_variables.scss';

.dropdown-container {
  font-weight: bold;
  font-size: 0.75rem;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;
  svg {
    margin-left: 0.75rem;
    transition: 0.3s ease;
  }
}

.dark-container {
    color: white;
}

.dropdown {
  position: absolute;
  background-color: white;
  border-radius: 0.5rem;
  width: 12rem;
  height: 8rem;
  top: 100%;
  left: 30%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 10px 20px rgba(72, 84, 159, 0.25);
  div {
    margin-bottom: 0.75rem;
  }
}

.dark-dropdown {
  background-color: $ebony;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}
</style>>