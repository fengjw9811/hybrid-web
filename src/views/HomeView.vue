<template>
  <div class="home">
    <p class="test">测试 fontSize</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .test {
    font-size: px2rem(16);
  }
</style>
