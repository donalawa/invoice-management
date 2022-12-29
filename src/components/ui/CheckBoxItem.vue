<script lang="ts">
    export default {
        props: ['name', 'label']
    }
</script>

<template>
    <div class="checkbox-container dark">
        <input type="checkbox" :checked="false" :name="name" id="">
        <label :for="name">{{label}}</label>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_mixins.scss';
@import '../../scss/_variables.scss';

.checkbox-container {
    display: flex;
    align-items: center;

  input[type="checkbox"] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    user-select: none;
    font-size: 0.75rem;
    white-space: nowrap;

    &::before {
      content: "";
      width: 1rem;
      height: 1rem;
      border-radius: 2px;
      margin-right: 0.75rem;
      margin-bottom: 2px;
      background-color: $selago;
      border: 1px solid $selago;
    }
  }

  input[type="checkbox"]:checked + label::before {
    content: url("../../assets/icons/icon-check.svg");
    background-color: $purple;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 1px solid $purple;
  }

  &:hover label::before {
    border: 1px solid $purple;
  }
  
}
.dark {
 label::before {
    background-color: $mirage;
    border: 1px solid $mirage;
  }
}
</style>>
