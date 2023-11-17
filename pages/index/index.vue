<template>
  <section class='section'>首页</section>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success" @click="fn.getData">成功按钮</van-button>
  <img src="~/assets/pic.jpg" alt="">333
  <img src="~/public/pic.jpg" alt="">333
  <AppAlert>
    这是一个自动导入的组件。
  </AppAlert>
  {{ ob.list }}
</template>
<script lang='ts' setup>
import { reactive } from 'vue';

let ob:any = reactive({
  list:[]
});
let fn = {
  async getData() {
    const {data} = await useFetch("/api/channel", { method: 'get' })
    console.log('data', data);
    ob.list=data
  }
};
 
</script>
<style scoped>
.section {
  background: #f00;
}
</style>