<script lang="ts">
    export default {
        props: ['clicked'],
        data() {
            return {
                phone: false
            }
        }
    }
</script>

<template>
    <button class="add-button" @click="clicked">
        <span>
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fill="#7C5DFA"
                fillRule="nonzero"
            />
            </svg>
            </span>
            {{phone ? "New" : "New Invoice"}}
     
    </button>
</template>

<style lang="scss" scoped>
@import '../../scss/_mixins.scss';
@import '../../scss/_variables.scss';

.add-button {
  background-color: $purple;
  border: none;
  color: white;
  height: 2.75rem;
  width: 5.625rem;
  font-weight: bold;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.875rem;
  position: relative;
  font-size: 0.75rem;
  letter-spacing: -0.25px;

  span {
    position: absolute;
    left: 6px;
    width: 2rem;
    height: 2rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  &:hover {
    background-color: $heliotrope;
  }
}

@media (min-width: $tablet) {
  .add-button {
    width: 9.375rem;
    padding-right: 1rem;
    height: 3rem;

    span {
      left: 0.5rem;
    }
  }
}
</style>>
