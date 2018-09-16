<template>
  <nav id="header" class="header">
    <img class="logo" :src="logo" />
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

</style>
