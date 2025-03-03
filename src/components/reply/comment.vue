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
import { onMounted, ref } from 'vue';
import reply from "./reply.vue"
import {comment} from "../../mock/data"
import type { CommentProps } from './reply';

const props = withDefaults(defineProps<CommentProps>(),{
  pageSize:8
})

//总数
const count = ref<number>(123)
//数据内容
const comments=ref()

//请求
type Request={
  token?: string;
  pageSize: number;//单页条数；
  nowPage: number;//当前页
  count?:false
}

const request:Request={
  pageSize:props.pageSize,
  nowPage:1,
  count:false
}
//获取数据
const drwCommentData=(e:boolean)=>{
  let data = comment
  console.log(data)
  if(e){
    count.value = data.count
  }
  comment.value = data.list.slice(
    (request.nowPage - 1) * request.pageSize,
    request.nowPage * request.pageSize
  )
}
 onMounted(()=>{
  drwCommentData(true)
 })

</script>

<style lang="less" scoped></style>