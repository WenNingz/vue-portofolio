<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from '@/pages/layout/navbar'

export default {
  components: {
    [Navbar.name]: Navbar
  }
}

</script>

<style scoped>

a {
  padding: 1rem;
  background: yellow;
}

</style>
