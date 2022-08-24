<template>
  <div class="home-page">
    <div class="home-page-content">
      <my-swiper :swiperImgs="swiperMock" :height="swiperHeight" />
      <activity-com>
        <div class="activity-520">
          <img v-for="(item, index) in activityMock" :key="index" :src="item" alt="">
        </div>
      </activity-com>
      <model-options></model-options>
      <seconds-kill :dataSource="secondKillMock"></seconds-kill>
    </div>
  </div>
</template>

<script>
import MySwiper from './swiper/MySwiper'
import ActivityCom from './currency/ActivityCom'
import ModelOptions from './currency/ModelOptions'
import SecondsKill from './seconds/SecondsKill'
export default {
  components: {
    MySwiper,
    ActivityCom,
    ModelOptions,
    SecondsKill
  },
  data: function () {
    // data为后端返回来的数据,mock为写死的数据
    return {
      swiperData: [],
      swiperMock: [
        require('@imgs/swiper-1.jpg'),
        require('@imgs/swiper-2.jpg'),
        require('@imgs/swiper-3.jpg'),
        require('@imgs/swiper-4.jpg'),
        require('@imgs/swiper-5.jpg'),
        require('@imgs/swiper-6.jpg'),
        require('@imgs/swiper-7.jpg'),
        require('@imgs/swiper-8.jpg')
      ],
      swiperHeight: '184px',
      activityData: [],
      activityMock: [
        require('@imgs/520-1.gif'),
        require('@imgs/520-2.gif'),
        require('@imgs/520-3.gif')
      ],
      secondKillData: [],
      secondKillMock: [
        {
          id: '1',
          icon: require('@imgs/jingDongMiaoSha-1.jpg'),
          oldPrice: '169',
          price: '119'
        },
        {
          id: '2',
          icon: require('@imgs/jingDongMiaoSha-2.jpg'),
          oldPrice: '1900',
          price: '1191'
        },
        {
          id: '3',
          icon: require('@imgs/jingDongMiaoSha-3.jpg'),
          oldPrice: '289',
          price: '199'
        },
        {
          id: '4',
          icon: require('@imgs/jingDongMiaoSha-4.jpg'),
          oldPrice: '108',
          price: '79'
        },
        {
          id: '5',
          icon: require('@imgs/jingDongMiaoSha-5.jpg'),
          oldPrice: '',
          price: ''
        },
        {
          id: '6',
          icon: require('@imgs/jingDongMiaoSha-6.jpg'),
          oldPrice: '',
          price: ''
        },
        {
          id: '7',
          icon: require('@imgs/jingDongMiaoSha-7.jpg'),
          oldPrice: '',
          price: ''
        },
        {
          id: '8',
          icon: require('@imgs/jingDongMiaoSha-8.jpg'),
          oldPrice: '',
          price: ''
        },
        {
          id: '9',
          icon: require('@imgs/jingDongMiaoSha-9.jpg'),
          oldPrice: '',
          price: ''
        },
        {
          id: '10',
          icon: require('@imgs/jingDongMiaoSha-10.jpg'),
          oldPrice: '',
          price: ''
        }
      ]
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

    &-content {
      height: 100%;

      .activity-520 {
        margin-top: px2rem(-8);
        border-top-left-radius: px2rem(8);
        border-top-right-radius: px2rem(8);

        img {
          display: inline-block;
          width: 33.33%;
        }
      }
    }
  }
</style>
