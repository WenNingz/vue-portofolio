<template>
  <router-link :to="link" class="button">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'link-button',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Click Me!'
    },
    link: {
      type: String,
      required: true,
      default: '/'
    }
  }
}
</script>
