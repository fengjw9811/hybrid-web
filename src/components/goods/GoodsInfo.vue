<template>
    <div class="goods goods-waterfall">
      <div class="goods-item goods-waterfall-item" v-for="(item, index) in dataSource" :key="index" ref="goodsItem">
        <img class="goods-item-img" :src="item.img" alt="" :style="imgStyles[index]">
        <div class="goods-item-desc">
          <p class="goods-item-desc-name">
            <span class="text-line-2">{{item.name}}</span>
          </p>
          <div class="goods-item-desc-data">
            <p class="goods-item-desc-data-price">{{item.price | priceValue}}</p>
            <p class="goods-item-desc-data-volume">{{item.volume}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  created: function () {
    this.initData()
  },
  data: function () {
    return {
      dataSource: [],
      MAX_IMG_HEIGHT: 230,
      MIN_IMG_HEIGHT: 178,
      imgStyles: [],
      ITEM_MARGIN_SIZE: 8,
      goodsItemStyles: []
    }
  },
  methods: {
    initData: function () {
      this.$http.get('/goods').then(data => {
        this.dataSource = data.list
        this.initImgStyles()
      })
    },
    imgHeight: function () {
      const result = Math.floor(Math.random() * (this.MAX_IMG_HEIGHT - this.MIN_IMG_HEIGHT) + this.MIN_IMG_HEIGHT)
      return result
    },
    initImgStyles: function () {
      this.dataSource.forEach(item => {
        const imgHeight = this.imgHeight() + 'px'
        this.imgStyles.push({
          height: imgHeight
        })
      })
    },
    initWaterfall: function () {
      const $goodsItem = this.$refs.goodsItem
      if (!$goodsItem) {
        return
      }
      let leftHeightTotal = 0
      let rightHeightTotal = 0
      $goodsItem.forEach(($el, index) => {
        let goodsItemStyle
        const elHeight = $el.clientHeight + this.ITEM_MARGIN_SIZE
        if (leftHeightTotal <= rightHeightTotal) {
          goodsItemStyle = {
            left: '0px',
            top: leftHeightTotal + 'px'
          }
          leftHeightTotal += elHeight
        } else {
          goodsItemStyle = {
            right: '0px',
            top: rightHeightTotal + 'px'
          }
          rightHeightTotal += elHeight
        }
        this.goodsItemStyles.push(goodsItemStyle)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
    .goods {
      background-color: $bgColor;

      &-item {
        background-color: white;
        padding: $marginSize;
        box-sizing: border-box;

        &-desc {
          width: 100%;

          &-name {
            font-size: $infoSize;
            line-height: px2rem(18);
          }

          &-data {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: $marginSize;

            &-price {
              font-size: $titleSize;
              color: $mainColor;
              font-weight: 500;
            }

            &-volume {
              font-size: $infoSize;
              color: $hintColor
            }
          }
        }
      }
    }

    .goods-waterfall {
      position: relative;
      margin: $marginSize;

      &-item {
        position: absolute;
        width: 49%;
        border-radius: $radiusSize;

        .goods-item-img {
          width: 100%
        }
      }
    }
</style>
