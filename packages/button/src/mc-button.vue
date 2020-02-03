<template>
  <button class="mc-button">
    <span>
      <slot></slot>
    </span>
  </button>

</template>

<script>
export default {
  name: 'McButton'
}

</script>

<style>
  .mc-button{
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
  }
</style>
