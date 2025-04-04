<template>
  <yk-space class="gather">
    <div v-for="(item, index) in gathers" :key="index" class="gather__list" :style="{ background: 'linear-gradient(' + item.bgColor + ')' }">
      <yk-space dir="vertical">
        <yk-text type="secondary">{{ item.name }}</yk-text>
        <yk-title :level="2" style="margin: 0;">{{ item.total }}</yk-title>
      </yk-space>
      
      <yk-button v-if="index > 0" size="xl" type="secondary" shape="square" @click="editPage(item.path)">
        <IconPlusOutline />
      </yk-button>
    </div>

  </yk-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { overLink } from '../../utils/menu';
import { overview } from '../../mock/data';
import { useRouter } from 'vue-router';
const  router = useRouter()
const gathers = ref(overLink)
const drawGatherData = () => {
  let data = overview.data;
  gathers.value[0].total = data.file
  gathers.value[1].total = data.article
  gathers.value[2].total = data.gallery
  gathers.value[3].total = data.diary


}
//跳转
const editPage = (n:string)=>{
  router.push(n)
}
onMounted(() => {
  drawGatherData();
})
</script>

<style lang="less" scoped>
.gather {
  width: 100%;
  &__list {
    width: 25%;
    background: #e3b0b0;
    display: flex;
    justify-content: space-between;
    padding: @space-xl;
    border-radius: @radius-m;
    align-items: center;
    &:first-child{
      .yk-title,.yk-text{
        color: @white;
        
      }
    }

  }
}
</style>