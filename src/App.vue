<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>

import Header from '@/pages/layout/Header'
import Navbar from '@/pages/layout/Navbar'

export default {
  components: {
    [Navbar.name]: Navbar,
    [Header.name]: Header
  }
}

</script>

<style scoped lang="scss">

a {
  padding: 1rem;
  background: yellow;
}

</style>
