<template>
  <nav id="navbar" class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/skills">Skill</router-link>
    <router-link to="/portfolio">My Works</router-link>
    <router-link to="/contact">Contact</router-link>


    <!-- <ul id="nav" class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/skills">Skill</router-link></li>
      <li><router-link to="/portfolio">My Works</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul> -->
  </nav>
</template>

<script>

export default {
  name: 'v-navbar',
}

</script>
<style scoped lang="scss">

</style>
