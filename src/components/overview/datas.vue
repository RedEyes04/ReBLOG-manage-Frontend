<template>
  <yk-space dir="vertical" size="xl" style="width: 50%;">
    <div class="card">
      <div class="card__title">
        <p class="card__title-name">访问量</p>
        <yk-radio-group v-model="visitRadio" type="button" :solid="true" @change="getVisit">
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="month">近一月</yk-radio>
        </yk-radio-group>
      </div>
      <LineChart chart-height="208px" :data="visitData" />
    </div>
    <div class="card">
      <div class="card__title">
        <p class="card__title-name">数据监测</p>
        <yk-radio-group v-model="cheakRadio" type="button" :solid="true">
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="month">近一月</yk-radio>
        </yk-radio-group>
      </div>
      <div style="display: flex;">
        <PieChart title="设备总数" :data="survey.data.device" chart-height="208px" />
        <PieChart title="访问总数" :data="survey.data.website" chart-height="208px" />
      </div>
    </div>

  </yk-space>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { LineChart, PieChart } from '../echarts/index';
import { visit, survey } from '../../mock/data'
const visitData = ref(visit.data)
const getVisit = (e: string) => {
  let data = visit.data;
  // console.log(e);
  if (e === "week") {
    visitData.value = data.slice(0, 7);  // 切割并更新 visitData
  } else {
    visitData.value = data;  // 不切割，直接赋值
  }

  console.log(visitData.value);  // 输出 visitData 的值，查看更新情况
}

const visitRadio = ref('week')
const cheakRadio = ref('week')
onMounted(() => {
  getVisit(visitRadio.value)
})
</script>

<style lang="less" scoped>

</style>