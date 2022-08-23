<template>
    <div class="tool-bar">
        <div class="tool-bar-item" v-for="(item, index) in toolBarData" :key="index" @click="onChangeFragment(item, index)">
            <img :src="[index === selectItemIndex ? item.hIcon : item.nIcon]" alt="" class="tool-bar-item-img">
            <p class="tool-bar-item-name" :class="{'tool-bar-item-name-h': index === selectItemIndex}">{{item.name}}</p>
        </div>
    </div>
</template>

<script>
/**
 * 1. 位于页面的底部
 * 2. 点击toolbar按钮,页面会发生相应的跳转
 * 3. 按钮分为默认和选中两个状态
 */
export default {
  data: function () {
    return {
      toolBarData: [
        {
          nIcon: require('@imgs/home-n.svg'),
          hIcon: require('@imgs/home-h.svg'),
          name: '首页',
          componentName: 'home-page'
        },
        {
          nIcon: require('@imgs/shopping-n.svg'),
          hIcon: require('@imgs/shopping-h.svg'),
          name: '购物车',
          componentName: 'shopping-cart'
        },
        {
          nIcon: require('@imgs/my-n.svg'),
          hIcon: require('@imgs/my-h.svg'),
          name: '我的',
          componentName: 'personal-center'
        }
      ],
      selectItemIndex: 0
    }
  },
  methods: {
    onChangeFragment: function (item, index) {
      this.selectItemIndex = index
      this.$emit('onChangeFragment', item.componentName)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
    .tool-bar {
      width: 100%;
      height: px2rem(46);
      display: flex;
      justify-content: space-around;
      background-color: white;
      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
      border-top: 1px solid $lineColor;

      &-item {
        text-align: center;
        padding: px2rem(4) px2rem(12);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-img {
          width: px2rem(22);
          height: px2rem(22);
        }

        &-name {
          font-size: $infoSize;
          margin-top: px2rem(4);

          &-h {
            color: $mainColor;
          }
        }
      }
    }
</style>
