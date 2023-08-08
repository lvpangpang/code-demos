<template>
  <div>这是一个测试组件</div>
</template>

<script>
console.log(1111111)
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('mounted')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>
