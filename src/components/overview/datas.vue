<template>
    <yk-space dir="vertical" size="xl" style="width: 50%;">
        <div class="data-card">
            <div class="data-card__title">
                <p class="data-card__title-name">访问量</p>
                <yk-radio-group v-model="visitRadio" type="button" :solid="true" @change="getVisit">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>
            </div>
            <LineChart  chart-height="208px" :data="visitData"/>
        </div>
        <div class="data-card">
            <div class="data-card__title">
                <p class="data-card__title-name">数据监测</p>
                <yk-radio-group v-model="cheakRadio" type="button" :solid="true">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="month">近一月</yk-radio>
                </yk-radio-group>
            </div>
        </div>

    </yk-space>
</template>

<script lang="ts" setup>
import { ref,onMounted} from 'vue'
import { LineChart } from '../echarts/index';
import { visit } from '../../mock/data'
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
onMounted(()=>{
    getVisit(visitRadio.value)
})
</script>

<style lang="less" scoped>
.data-card {
    padding: @space-xl;
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 100%;

    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-name {
            .font-l();
            font-weight: 600;
            color: @font-color-l;
        }
    }
}
</style>