<template>
  <div class="full-width center-content">
    <h1>Hi!</h1>
    <vc-hello name="World" />
  </div>
</template>

<script>

import Hello from './components/Hello.vue'

export default {
  components: {
    [Hello.name]: Hello
  }
}

</script>

<style scoped>

</style>