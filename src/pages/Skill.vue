<template>
  <main id="main" class="main">
    <div class="content-left">
      <h1 class="page-title">Professional skills</h1>
      <div class="skill-img">
        <img :src="skills" alt="Skills list" class="skill-list">
      </div>
    </div>
    <div class="content-right">
      <div class="skills-text animated bounceInLeft">
        <p>As a developer, I don't have many works. I strive hard to learn and code beautifully and always improving my skills and logic.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non iaculis quam, eget eleifend massa. Sed ut elementum justo. Sed vehicula semper justo, nec ornare nunc scelerisque nec.</p>
        <p>usce posuere lacus quam, at malesuada magna luctus nec. Proin tincidunt nunc id ex rutrum iaculis. Sed non ullamcorper leo, id porttitor nisl. Cras consectetur libero nisl, non dapibus nisi venenatis sit amet. </p>
        <p>Would like to know more?<br/>Please check my <span>nanchara</span> or just contact me: wenning.me@gmail.com</p>
      </div>
      <link-button class="pos-bottom" text="What have I done!" link="/portfolio"></link-button>
    </div>
  </main>
</template>

<script>
import LinkButton from '@/components/link-button/LinkButton'
import Skills from '@/assets/img/skills.png'

export default {
  name: 'Skill',
  components: {
    [LinkButton.name]: LinkButton
  },
  data: function () {
    return {
      skills: Skills
    }
  }
}

</script>
<style scoped lang="scss">
.skills-text {
  adding:5em 3em 0 0;
  font-size: 20px;
}

.skill-img {
  position:relative;
  padding-top:100%;
}

.skill-list {
  position:absolute;
  top:0;
  width:auto;
  height:60%;
}
</style>
