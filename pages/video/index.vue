<template>
  <section class='section'>demo222{{ ob.name }}</section>
  ob.list:{{ ob.list }}
  <van-list v-model:loading="ob.loading" :finished="ob.finished" finished-text="没有更多了" @load="fn.onLoad">
    <van-cell v-for="item in ob.list"  :title="item.title" :value="item.content" label="描述信息">
    <template #title>
      <div>id  {{ item.id }}</div>
      </template>
    </van-cell>
  </van-list>
</template>
<script setup>
import { reactive } from 'vue';

const t = ref("测试")
useHead({
  titleTemplate: t,
})
let ob = reactive({
  name: "333",
  loading: false,
  finished: false,
  page: 1,
  list: []

});
setTimeout(() => {
  t.value = 'dddd'
}, 4000)
let fn = {
  async getList() {

  },
  async proxyTest() {
    const { data } = await useFetch("/proxy/video111")
    console.log('data', data);
  },
  async onLoad() {
    ob.loading = true
    const { data: videoList } = await useFetch("/api/video")
    ob.loading = false
    console.log('data1222222222', videoList.value.length);
    const arr = videoList.value?.slice((ob.page - 1) * 10, ob.page * 10)
    ob.list = [...ob.list, ...arr]
    if (videoList.value.length > (ob.page - 1) * 10 && videoList.value.length < ob.page * 10) {
      ob.finished = true
    } else {
      ob.page++
    }
  }
};
// fn.proxyTest()
fn.getList()
fn.onLoad()
</script>
<style scoped></style>