<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(item, index) in swiperImgs" :key="index">
        <img class="swiper-slide-img" :style="{height: height}" :src="item" alt="">
    </swiper-slide>

    <template v-slot:pagination>
        <div class="swiper-pagination"></div>
    </template>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    height: {
      type: String,
      default: 'auto'
    },
    swiperImgs: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      swiperOptions: {
        autoplay: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'custom-bullet-class'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@css/style.scss';
    .swiper-slide-img{
      width: 100%;
    }
    .swiper-pagination {
        bottom: px2rem(12);
        .custom-bullet-class {
            box-sizing: border-box;
            border-radius: 100%;
            height: px2rem(6);
            width: px2rem(6);
            border: px2rem(1) solid #fff;
            margin: 0 px2rem(4);
            display: inline-block;
            opacity: 1;
        }
        .swiper-pagination-bullet-active {
            background: white;
        }
    }
</style>
