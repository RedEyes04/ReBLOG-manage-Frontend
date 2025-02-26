<template>
  <yk-space dir="vertical" size="xl">
    <TopTitle :is-search="false" />
    <gather />
    <yk-space style="width: 100%;">
      <datas />
      <div class="report" style="background-color: aqua;">
        评论（待做）
      </div>
    </yk-space>
  </yk-space>
</template>

<script lang="ts">
export default {
  name: 'OverView',
  // 其他配置
}
import TopTitle from '../components/bar/TopTitle.vue';
import gather from '../components/overview/gather.vue'
import datas from '../components/overview/datas.vue'
</script>

<style lang="less" scoped></style>