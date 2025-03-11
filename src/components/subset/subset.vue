<template>
   <div class="subset">
      <yk-space>
         <div class="subset__menu" :class="{ 'subset__menu-selected': selected == '-1all' }"
            @click="changeOption(-1, 'all')">
            全部{{ subsetStore.count }}
         </div>

         <div class="subset__menu" v-for="item in state.data" :key="item.id"
            :class="{ 'subset__menu-selected': selected == item.id + 'state' }" @click="changeOption(item.id, 'state')">
            {{ item.name }}{{ item.value }}
         </div>

         <div class="subset__menu" :class="{ 'subset__menu-selected': selected == subsetStore.exclude.id + 'exclude' }"
            @click="changeOption(subsetStore.exclude.id, 'exclude')">
            {{ subsetStore.exclude.name }}{{ subsetStore.exclude.value }}
         </div>

         <div class="subset__menu" v-for="item in subsetStore.data" :key="item.id"
            :class="{ 'subset__menu-selected': selected == item.id + 'subset' }"
            @click="changeOption(item.id, 'subset')">
            {{ item.name }}{{ item.value }}
         </div>
      </yk-space>

      <div class="subset__actions">
         <yk-popconfirm title="请输入分组名称"   @cancel="cancel"
            @confirm="confirm" trigger="click" placement="bottom">
            <yk-text type="primary">
               <IconCirclePlusOutline style="margin-right: 4px;" />新建
            </yk-text>
            <template #content>
               <div style="margin: 8px 0 16px">
                  <yk-input
               show-counter
               :limit="6"
               placeholder="请输入..."
               style="width: 208px;"
               v-model="inputValue"
               >

               </yk-input>
               </div>
            </template>
         </yk-popconfirm>

         <yk-text type="primary" class="subset__manage">
            <IconSettingsOutline style="margin-right: 4px;" />管理分组
         </yk-text>
      </div>
   </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { subset, state } from "../../mock/data";
import { useSubsetStore } from "../store/subset";
const emits = defineEmits(["nowSubset"]);

const subsetStore = useSubsetStore();
const selected = ref<number | string>("-1all");

const changeOption = (id: number | string, type: string) => {
   if (id + type != selected.value) {
      selected.value = id + type;
      emits("nowSubset", { id, type });
   }
};


const inputValue= ref<number|string>()
const proxy: any = getCurrentInstance()?.proxy;
//取消
function cancel() {
   inputValue.value=""
}
function confirm() {
   if(inputValue.value){
      let obj={
         id:-2,
         name:inputValue.value,
         value:0
      }
      subsetStore.data.push(obj)
      inputValue.value=""
      proxy.$message({ type: 'primary', message: '插入完成' })

   }else
   proxy.$message({ type: 'warning', message: '请输入' })

}

const rawSubset = () => {
   subsetStore.data = subset.data.list;
   subsetStore.count = subset.data.count;
};

onMounted(() => {
   rawSubset();
});
</script>

<style lang="less" scoped>
.subset {
   padding: @space-m @space-xl;
   border-radius: @radius-m;
   background-color: @bg-color-l;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .yk-text {
      cursor: pointer;
   }
}

.subset__menu {
   padding: 0 @space-s;
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

.subset__actions {
   display: flex;
   align-items: center;
   gap: 12px;
}
</style>