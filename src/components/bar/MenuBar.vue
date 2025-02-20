<template>
    <yk-space dir="vertical">
      <!-- 渲染每个导航项 -->
      <router-link v-for="item in navLinks" :key="item.path" :to="item.path">
        <yk-space align="center">
          <component :is="item.icon"></component> <!-- 动态渲染图标 -->
          <yk-text>{{ item.name }}</yk-text> <!-- 显示导航项的名称 -->
        </yk-space>
      </router-link>
    </yk-space>
  </template>
  
  <script lang="ts">
  import { navLinks } from '../../utils/menu.ts'
  
  export default {
    data() {
      return {
        navLinks
      }
    }
  }
  </script>
  
  <style lang="less" scoped></style>
  