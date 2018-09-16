<template>
  <main id="main" class="main">
    <div class="content-left">
      <h1>Home Left!</h1>
    </div>
    <div class="content-right">
      <h1>I'm Dina Setiana</h1>
      <p>a Developer</p>
      <link-button text="BYE!" link="/about"></link-button>
    </div>
  </main>
</template>

<script>
import LinkButton from '@/components/link-button/LinkButton'

export default {
  name: 'Home',
  components: {
    [LinkButton.name]: LinkButton
  }
}

</script>
<style scoped lang="scss">
h1 {
  color: green
}
</style>
