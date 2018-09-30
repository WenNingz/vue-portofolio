<template>
  <header id="header" class="header twelve">
    <div class="row">
      <router-link to="/" class="eleven">
        <img class="logo" :src="logo" />
      </router-link>
      <a class="github" href="https://github.com/WenNingz">
        <img :src="github" />
      </a>
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/img/Logo-Small-Light.png'
import Github from '@/assets/img/GitHub-Mark-Light-32px.png'

export default {
  name: 'v-header',
  data: function () {
    return {
      logo: Logo,
      github: Github
    }
  }
}

</script>
<style scoped lang="scss">
.github {
  align-self: end;
  text-align: center;
}
// .logo {
//   height:100%;
//   width:auto;
// }
</style>
