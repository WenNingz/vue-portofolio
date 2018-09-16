<template>
  <button role="button" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Click Me!'
    }
  }
}
</script>
