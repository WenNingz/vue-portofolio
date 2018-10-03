<template>
  <main id="under-construction" class="twelve center">
    <div class="rel">
      <h1 class="title">Coming Soon</h1>
      <p>Site is in progress....</p>
      <div class="progress-bar">
        <progress value="20" max="100">20%</progress>
      </div>
      <p>Follow me and see what I am up to:</p>
      <div class="social-links">
        <span>Github</span>
        <span>Qiita</span>
        <span>Qiita</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'UnderConstruction',
}

</script>
<style scoped lang="scss">
.center {
  margin: auto;
  text-align: center;
}

.title {
  font-size:5vw;
  margin-bottom: 0.5em;
}

progress {
  margin: 0.5em;
}

.social-links > span {
  padding: 0.5em;
}
</style>
