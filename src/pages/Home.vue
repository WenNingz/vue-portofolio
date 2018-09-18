<template>
  <main id="main" class="main">
    <div class="content-left">
      <img class="content-logo" :src="logo" alt="Dina Setiana">
    </div>
    <div class="content-right">
      <h1 class="title animated tada">I'm<br/>Dina Setiana</h1>
      <p class="subtitle">a Developer</p>
      <link-button class="pos-bottom" text="Find out more ABOUT me!" link="/about"></link-button>
    </div>
  </main>
</template>

<script>
import LinkButton from '@/components/link-button/LinkButton'
import Logo from '@/assets/img/logo_big.png'

export default {
  name: 'Home',
  components: {
    [LinkButton.name]: LinkButton
  },
  data: function () {
    return {
      logo: Logo
    }
  }
}

</script>
<style scoped lang="scss">
.content-logo {
  height: 100%;
  width: auto;
}

.title {
  font-size:5vw;
}

.subtitle {
  font-size:2.5vw;
}
</style>
