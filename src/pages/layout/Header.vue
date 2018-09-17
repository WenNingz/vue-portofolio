<template>
  <nav id="header" class="header">
    <router-link to="/">
      <img class="logo" :src="logo" />
    </router-link>
  </nav>
</template>

<script>
import Logo from '@/assets/img/logo_90.png'

export default {
  name: 'Header',
  data: function () {
    return {
      logo: Logo
    }
  }
}

</script>
<style scoped lang="scss">
.logo {
  height:100%;
  width:auto;
}
</style>
