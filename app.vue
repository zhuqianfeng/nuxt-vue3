<template>
  <div>
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/video">视频页</NuxtLink>
    <NuxtPage  :keepalive="{max:10}"/>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title:"哔哩哔哩",
  description:"描述" ,
  keywords:"bilibi,B站"
})
</script>
<style  lang='scss'>
@import './assets/reset.css';
:root{
  --van-primary-color:#f00 !important;
}
</style>