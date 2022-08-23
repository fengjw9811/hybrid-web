<template>
    <div class="main">
      <!-- 动态组件 -->
      <component :is="currentComponent"></component>
      <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
    </div>
</template>

<script>
import ToolBar from '@/components/currency/ToolBar.vue'

export default {
  components: {
    ToolBar,
    // 异步组件引入方式
    HomePage: () => import('@/components/HomePage.vue'),
    ShoppingCart: () => import('@/components/ShoppingCart.vue'),
    PersonalCenter: () => import('@/components/PersonalCenter.vue')
  },
  data: function () {
    return {
      currentComponent: 'home-page'
    }
  },
  methods: {
    onChangeFragment: function (componentName) {
      this.currentComponent = componentName
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
