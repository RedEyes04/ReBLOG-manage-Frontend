<template>
  <yk-space dir="vertical" size="xl">
   <TopTitle :is-search = "false"/>
   <gather/>
  </yk-space>
</template>

<script lang="ts">
export default {
  name: 'OverView',
  // 其他配置
}
import TopTitle from '../components/bar/TopTitle.vue';
import { gather } from '../components/overview/gather.vue'
</script>

<style lang="less" scoped></style>