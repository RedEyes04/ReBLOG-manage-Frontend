<template>
    <div class="top-title">
        <yk-title :level="3" >{{ props.name }}</yk-title>
        <slot name="custom" />
        <yk-space size="s" v-if="isSearch">
            <yk-button type="secondary" v-show="SearchData" @click="canclesearch">取消搜索</yk-button>
            <yk-input-search style="width: 320px" placeholder="请输入" v-model="SearchData" @serch="search">
      
      <template #suffix>
        <yk-button type="secondary"><IconSearchOutline />
        </yk-button>
      </template>
    </yk-input-search>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
// 定义 props 类型

type titleProps = {
    name: string;
    isSearch:boolean;
};

// 使用 defineProps 来接收父组件传递的 props，并设置默认值
const props = withDefaults(defineProps<titleProps>(), {
    name: '总览',
    isSearch:true,
});

import {ref} from 'vue'
const SearchData = ref();

const emit =defineEmits(['search'])
//搜索事件 传给父级
const search =()=>{
    emit('search',SearchData.value)
}
//取消搜索 传空给父级
const canclesearch =()=>{
    emit('search','')
    SearchData.value = ''
}
</script>

<style lang="less" scoped>
    .top-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
