<template>
  <div id="app">
    <button @click="testMessage('success')">测试Message</button>
    <button @click="testMessage('error')">测试Message</button>
    <button @click="showTest=!showTest">切换test</button>
    <test :ey="showTest"></test>
  </div>
</template>

<script>
import Test from './components/Test'
let index = 1
export default {
  name: "App",
  data() {
    return {
      showTest: true
    }
  },
  components: {
    Test
  },
  methods: {
    testMessage(type) {
      this.$message1[type](`吕肥肥喜欢上幼儿园${index++}`)
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
