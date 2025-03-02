<template>
  <!-- 单条数据 -->
  <div class="card">
    <div class="card__title">
      <p class="card__title-name">评论 {{ count }}</p>

    </div>
    <reply style="padding-top: 12px;"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import reply from "./reply.vue"
const count = ref<number>(123)



</script>

<style lang="less" scoped></style>