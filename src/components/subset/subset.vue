<template>
 <div class="subset">
   <yk-space>
      <div class="subset__menu"  :class="{'subset__menu-selected':selected=='-1all'}" @click="changeOption(-1,'all')">
         全部{{ subsetStore.count }}
      </div>
     
      <div class="subset__menu" v-for="item in state.data" :key="item.id"  :class="{'subset__menu-selected':selected==item.id+'state'}" @click="changeOption(item.id,'state')">
         {{ item.name }}{{ item.value }}
      </div>
      <div class="subset__menu" :class="{'subset__menu-selected':selected==subsetStore.exclude.id+'exclude'}" @click="changeOption(subsetStore.exclude.id,'exclude')">
         {{ subsetStore.exclude.name }}{{ subsetStore.exclude.value }}
      </div>
      <div class="subset__menu" v-for="item in subsetStore.data" :key="item.id" :class="{'subset__menu-selected':selected==item.id+'subset'}" @click="changeOption(item.id,'subset')">
         {{ item.name }}{{ item.value }}
      </div> 
   </yk-space>
 </div>
</template>

<script lang = "ts" setup>
import { onMounted,ref } from "vue";
import {subset,state} from "../../mock/data"
// import type { SubsetData } from "../../utils/interface";
import { useSubsetStore } from "../store/subset";
import type { EmitFlags } from "typescript";
const emits=defineEmits(['nowSubset'])

const subsetStore = useSubsetStore()
//当前选择
const selected=ref<number|string>('-1all')
//选择切换
const changeOption=(id:number|string,type:string)=>{
   if(id+type!=selected.value){
      selected.value=id+type
      emits('nowSubset',{id,type})
   }
}

const rawSubset=()=>{
   subsetStore.data=subset.data.list
   subsetStore.count=subset.data.count
}
onMounted(()=>{
   rawSubset()
})
</script>

<style lang = "less" scoped>
 .subset{
    padding: @space-m @space-xl;
    border-radius: @radius-m;
    background-color: @bg-color-l;
    width: 100%;
    &__menu{
       padding: 0 @space-l;
       background: @bg-color-m;
       border-radius: @radius-r;
       line-height: 32px;
       user-select: none;
       cursor: pointer;
       &-selected {
      background: @pcolor-1;
      color: @pcolor;
      font-weight: 500;
    }
    }
 }
</style>