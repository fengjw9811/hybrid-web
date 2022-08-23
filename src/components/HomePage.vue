<template>
  <div class="home-page">
    <div class="home-page-content">
      <my-swiper :swiperImgs="
      this.swiperData[0]?.icon ? swiperData.map(item => item.icon) : swiperImgs
      " :height="swiperHeight"></my-swiper>
    </div>
  </div>
</template>

<script>
import MySwiper from './swiper/MySwiper.vue'
export default {
  components: {
    MySwiper
  },
  data: function () {
    return {
      swiperData: [],
      swiperImgs: [
        require('@imgs/swiper-1.jpg'),
        require('@imgs/swiper-2.jpg'),
        require('@imgs/swiper-3.jpg'),
        require('@imgs/swiper-4.jpg'),
        require('@imgs/swiper-5.jpg'),
        require('@imgs/swiper-6.jpg'),
        require('@imgs/swiper-7.jpg'),
        require('@imgs/swiper-8.jpg')
      ],
      swiperHeight: '184px'
    }
  },
  created: function () {
    this.initData()
  },
  methods: {
    // 获取数据
    initData: function () {
      this.$http.get('/swiper').then(data => {
        this.swiperData = data.list
        console.log(this.swiperData)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-page {
    width: 100%;
    height: 100%;

    &-content {
      height: 100%;
    }
  }
</style>
