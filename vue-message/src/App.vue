<template>
  <div id="app">
    <button @click="testMessage('success')">测试Message</button>
    <button @click="testMessage('error')">测试Message</button>
  </div>
</template>

<script>
let index = 1
export default {
  name: "App",
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
