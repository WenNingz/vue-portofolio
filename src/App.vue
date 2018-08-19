<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/skills">Skill</router-link>
    <router-link to="/portfolio">My Works</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  }
}

</script>

<style scoped>

</style>
