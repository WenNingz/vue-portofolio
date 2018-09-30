<template>
  <main id="main" class="main twelve">
    <div class="row">
      <div class="six">
        <img class="content-logo" :src="logo" alt="Dina Setiana">
      </div>
      <div class="six rel">
          <h1 class="title animated tada">I'm<br/>Dina Setiana</h1>
          <p class="subtitle">a Developer</p>
          <link-button class="bottom" text="Find out more ABOUT me!" link="/about"></link-button>
      </div>
    </div>
  </main>
</template>

<script>
import LinkButton from '@/components/link-button/LinkButton'
import Logo from '@/assets/img/Logo-Big-Light.png'

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
.row {
  padding: 2em;
  grid-gap: 2em;
}
.content-logo {
  object-fit: contain;
  max-height: 100%;
  width: 100%;
}

.title {
  font-size:5vw;
}

.subtitle {
  font-size:2.5vw;
}

.bottom {
  position: absolute;
  bottom: 0;
}
</style>
