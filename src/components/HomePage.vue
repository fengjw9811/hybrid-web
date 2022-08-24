<template>
  <div class="home-page">
    <div class="home-page-content">
      <my-swiper :swiperImgs="swiperData.map(item => item.icon)" :height="swiperHeight" />
      <activity-com>
        <div class="activity">
          <img v-for="(item, index) in activityData" :key="index" :src="item" alt="">
        </div>
      </activity-com>
      <model-options></model-options>
      <seconds-kill :dataSource="secondKillData"></seconds-kill>
      <activity-com>
        <div class="activity-pingou">
          <img src="@imgs/haoHuoQiang.gif" alt="">
        </div>
      </activity-com>
      <goods-info></goods-info>
    </div>
  </div>
</template>

<script>
import MySwiper from './swiper/MySwiper'
import ActivityCom from './currency/ActivityCom'
import ModelOptions from './currency/ModelOptions'
import SecondsKill from './seconds/SecondsKill'
import GoodsInfo from './goods/GoodsInfo'
import px2rem from '@js/px2rem.js'
export default {
  components: {
    MySwiper,
    ActivityCom,
    ModelOptions,
    SecondsKill,
    GoodsInfo
  },
  data: function () {
    // data为后端返回来的数据,mock为写死的数据
    return {
      swiperData: [],
      swiperHeight: px2rem(184),
      activityData: [],
      secondKillData: []
    }
  },
  created: function () {
    this.initData()
  },
  methods: {
    // 获取数据
    // TODO: 构建yapi接口获取数据,目前先写死数据代替
    initData: function () {
      this.$http.all([
        this.$http.get('/swiper'),
        this.$http.get('/activities'),
        this.$http.get('/seconds')
      ]).then(this.$http.spread((swiperData, activityData, secondKillData) => {
        this.swiperData = swiperData.list
        this.activityData = activityData.list
        this.secondKillData = secondKillData.list
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
  .home-page {
    width: 100%;
    height: 100%;
    background-color: $bgColor;
    overflow: hidden;
    overflow-y: auto;

    &-content {
      height: 100%;

      .activity {
        margin-top: px2rem(-8);
        border-top-left-radius: px2rem(8);
        border-top-right-radius: px2rem(8);

        img {
          display: inline-block;
          width: 33.33%;
        }
      }

      .activity-pingou {
        background-color: white;
        margin-top: $marginSize;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
