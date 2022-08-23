<template>
    <div>
        <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
    </div>
</template>

<script>
import ToolBar from '@c/ToolBar.vue'
export default {
  components: {
    ToolBar
  },
  methods: {
    onChangeFragment: function (componentName) {
      console.log(componentName)
    }
  }
}
</script>

<style>

</style>
