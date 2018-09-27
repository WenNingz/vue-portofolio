<template>
  <div class="container">
    <router-view></router-view>
    <v-navbar></v-navbar>    
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
