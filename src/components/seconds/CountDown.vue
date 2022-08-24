<template>
    <div class="count-down">
        <span class="count-down-endtime">{{endMoment}}点场</span>
        <span class="count-down-surplus">{{remainingTime}}</span>
    </div>
</template>

<script>
export default {
  props: {
    endMoment: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function () {
    return {
      remainingTime: '',
      remainingSeconds: 0
    }
  },
  created: function () {
    this.computedRemainingTime()
  },
  methods: {
    // 计算剩余时间
    computedRemainingTime: function () {
      const date = new Date()
      if (date.getHours() > this.endMoment) {
        this.remainingTime = '活动已结束'
        return
      }
      if (date.getHours() === this.endMoment) {
        this.remainingTime = '活动进行中'
        return
      }
      const hoursDiff = this.endMoment - date.getHours() - 1
      const minutesDiff = 60 - date.getMinutes() - 1
      const secondsDiff = 60 - date.getSeconds()
      this.remainingSeconds = hoursDiff * 3600 + minutesDiff * 60 + secondsDiff
      setInterval(() => {
        this.remainingSeconds -= 1
      }, 1000)
    }
  },
  watch: {
    remainingSeconds: function (remainingSeconds) {
      const hours = Math.floor(remainingSeconds / 3600)
      const minutes = Math.floor(remainingSeconds / 60) % 60
      const seconds = remainingSeconds % 60
      this.remainingTime = hours + ':' + minutes + ':' + seconds
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
    .count-down {
        display: inline-block;
        font-size: $infoSize;
        margin-left: $marginSize;

        span {
            display: inline-block;
            padding: px2rem(2) px2rem(4)
        }

        &-endtime {
            background-color: $mainColor;
            border-top-left-radius: px2rem(4);
            border-bottom-left-radius: px2rem(4);
            border: px2rem(1) solid $mainColor;
            color: white;
        }

        &-surplus {
            background-color: white;
            border-top-right-radius: px2rem(4);
            border-bottom-right-radius: px2rem(4);
            border: px2rem(1) solid $mainColor;
            color: $mainColor;
        }
    }
</style>
