<template>
<yk-drawer placement="right" :show="active" @close="closes" :title="'私信[' + count + ']'" >
    
    <yk-space dir="vertical">
      <reply v-for="item in comments" :key="item.id" :content="item" style="padding-top: 15px;" @delete="deleteComment"
        :isComment="false" />
      <!-- <reply /> -->
    </yk-space> <template #footer>
      <yk-pagination :total="count" simple @change="changePage" />
    </template>

  </yk-drawer>
</template>

<script lang="ts" setup>
import type { InformationProps } from '../reply/reply';
import { toRefs } from 'vue';
import { onMounted, ref, getCurrentInstance } from 'vue';
import { comment } from "../../mock/data"
const proxy: any = getCurrentInstance()?.proxy

const props = withDefaults(defineProps<InformationProps>(), {
  active: false,
  pageSize: 8
})
const { active } = toRefs(props)

const emits = defineEmits(["close"])
const closes = () => {
  emits("close", false); // 通知父组件更新 active
};

//总数
const count = ref<number>(123)
//数据内容
const comments = ref()

//请求
type Request = {
  token?: string;
  pageSize: number;//单页条数；
  nowPage: number;//当前页
}

const request: Request = {
  pageSize: props.pageSize,
  nowPage: 1,
  // count:false
}
//获取数据
const drwCommentData = () => {
  let data = comment.data
  // console.log(data)

  comments.value = data.list.slice(
    (request.nowPage - 1) * request.pageSize,
    request.nowPage * request.pageSize
  )
}
//翻页
const changePage = (e: number) => {
  request.nowPage = e;
  drwCommentData()
}


//删除评论
const deleteComment = (e: number) => {
  // 过滤掉删除的评论
  comment.data.list = comment.data.list.filter((obj: any) => obj.id !== e);

  // 重新获取数据
  drwCommentData();

  // 这里手动通知父组件 保持窗口开启
  emits("close", true);

  proxy.$message({ type: 'primary', message: '删除成功' });
};
// const deleteComment = (e: number) => {
//   comment.data.list = comment.data.list.filter((obj: any) => obj.id !== e);
//   drwCommentData(); // 重新获取数据，刷新当前列表
//   proxy.$message({ type: 'primary', message: '删除成功' });
// };


onMounted(() => {
  drwCommentData()
})

</script>

<style lang="less" scoped></style>