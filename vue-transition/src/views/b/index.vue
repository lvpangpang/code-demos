<template>
  <div class="b-box">
    <div>BBBB</div>
    <router-link to="/c">去CCCC</router-link>
    <div @click="$router.back()">返回AAAA</div>  
  </div>
</template>

<style>
.b-box {
  height: 100vh;
  background: green;
}
</style>