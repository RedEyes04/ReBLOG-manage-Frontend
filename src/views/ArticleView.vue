<template>
    <yk-space dir="vertical" style="width:100%;" size="l">
      <TopTitle name="博客文章" style="margin-bottom:8px" />
      <subsetVue />
    <yk-space style="width:100%;">
        <div style="background-color: aqua; height: 12px; width:100%;"></div>
        <label-view style="width: 280px; flex: none;" />
    </yk-space>
    </yk-space>
  </template>
<script lang = "ts" setup>
import TopTitle from '../components/bar/TopTitle.vue';
import subsetVue from '../components/subset/subset.vue';
import labelView from '../components/label/label.vue';
// import ArticleView from "../components/article/article.vue"
</script>

<style lang = "less" scoped>

</style>