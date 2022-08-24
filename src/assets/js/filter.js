import Vue from 'vue'

Vue.filter('priceValue', function (value) {
  if (!value) {
    return ''
  }
  const result = parseFloat(value)
  if (Number.isInteger(result)) {
    return result
  }
  return result.toFixed(2)
})
