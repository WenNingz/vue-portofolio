<template>
  <main id="main" class="main">
    <div class="content-left">
      <h1 class="page-title">My works</h1>
      <div class="project-list">
        <div>
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div><img height="200px" width="100%" :src="logo"/></div>
        <div>
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
      </div>
      <link-button class="pos-bottom-r" text="Reach out to me!" link="/contact"></link-button>
    </div>
  </main>
</template>

<script>
import LinkButton from '@/components/link-button/LinkButton'
import Logo from '@/assets/img/logo_big.png'

export default {
  name: 'Portofolio',
  components: {
    [LinkButton.name]: LinkButton
  },
  data: function () {
    return {
      logo: Logo
    }
  }
}

</script>
<style scoped lang="scss">
.content-left {
  position:relative;
  grid-column: 1/ span 2;
}

.project-list {
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex:1;
}

.project-list > div {
  width: 20%;
  margin: 1%;
}

.pos-bottom-r {
  position:absolute;
  bottom:0;
  right:0;
}
</style>
