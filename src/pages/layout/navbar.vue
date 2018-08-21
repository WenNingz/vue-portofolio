<template>
  <nav id="navbar" class="navbar">
    <ul id="nav" class="navbar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/skills">Skill</router-link></li>
      <li><router-link to="/portfolio">My Works</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
}

</script>
<style scoped>

</style>
