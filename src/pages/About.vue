<template>
  <main id="main" class="main">
    <div class="content-left">
      <h1 class="page-title">About me</h1>
      <div class="traits">
        <div class="traits-1">
          <img :src="traits1" alt="Trait Img" />
          <h5>Traits header</h5>
        </div>
        <div class="traits-2">
          <img :src="traits1" alt="Trait Img" />
          <h5>Traits header</h5>
        </div>
        <div class="traits-3">
          <img :src="traits1" alt="Trait Img" />
          <h5>Traits header</h5>
        </div>
        <div class="traits-4">
          <img :src="traits1" alt="Trait Img" />
          <h5>Traits header</h5>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="about-text">
        <p>Hi, I'm Dina Setiana. Born in 1994, raised in a small island in Indonesia. You can call me either Dina or Ning. Nice to meet you!</p>
        <p>I am a web developer from Indonesia. Currently in Japan studying and working at <b>Bridge Institute Technology</b>, creating front-end and backend for website.</p>
        <p>I enjoy playing game and  watching TV shows, drama & good movie.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non iaculis quam, eget eleifend massa. Sed ut elementum justo.</p>
      </div>

      <link-button class="pos-bottom" text="What can I do!" link="/skills"></link-button>
    </div>
  </main>
</template>

<script>
import LinkButton from '@/components/link-button/LinkButton'
import TraitImg from '@/assets/img/hacker.png'

export default {
  name: 'About',
  components: {
    [LinkButton.name]: LinkButton
  },
  data: function() {
    return {
      traits1 : TraitImg
    }
  }
}

</script>
<style scoped lang="scss">
.traits {
  max-height:80%;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
}

.traits > div {
  margin: 2em;
  max-width:20vw;
  text-align:center;
}


.traits > div > img {
  width:150px;
  height:150px;
}

.traits > div > h5 {
  padding-top:1em;
  color:#00CEC9;
}

.about-text {
  padding:5em 3em 0 0;
  font-size: 20px;
}

</style>
