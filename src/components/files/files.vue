<template>
    <div class="files">
        <div class="files__tools">

            <!-- 左边 -->
            <yk-space>
                <yk-checkbox :checked="checkedAll" :indeterminate="indeterminate" @change="handleChangeAll">
                    全选
                </yk-checkbox>
                <yk-text>
                    已选择 3 项内容
                </yk-text>
                <yk-text type="primary" style="cursor: pointer;">
                    取消选择
                </yk-text>
            </yk-space>


            <!-- 右边 -->
            <yk-space>
                <IconDeleteOutline class="files__tools-delete" />
                <IconSwitchOutline class="files__tools-switch" />
            </yk-space>

        </div>
        <div class="files__main">
            <filesItem v-for="item in files" :data="item" :key="item.id"/>

        </div>
    </div>
    <div class="pagination">
      <yk-pagination :total="count" size="m" @change="changePage"></yk-pagination>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { mkfile } from "../../mock/data"
import filesItem from './files-item.vue';


type FileProps = {
    pageSize:number;
    subsetId:number | string;

}
const props = withDefaults(defineProps<FileProps>(),{
    pageSize:8,
    subsetId:-1
})
//头部操作

const indeterminate = ref(false)
const checkedAll = ref(false)

const handleChangeAll = (value: boolean) => {
    indeterminate.value = false
    if (value) {
        checkedAll.value = true
        // data.value = ['1', '2', '3']
    } else {
        checkedAll.value = false
        // data.value = []
    }
}

//总数
const count = ref<number>(123)
//数据内容
const files = ref();

//请求
type Requset = {
  token?: string;
  pageSize: number;//单页条数；
  nowPage: number;//当前页
}

const request: Requset = {
  pageSize: props.pageSize,
  nowPage: 1,
}

//获取数据
const drwData = (e:boolean) => {
  let data = mkfile;
  if(e){
    count.value = data.count;
  }
  
  files.value = data.list.slice(
    (request.nowPage - 1) * request.pageSize,
    request.nowPage * request.pageSize
  );
  console.log((files) )
//加入选择项
for(let i = 0 ; i <files.value.length;i++){
    files.value[i].selected=true
}
}

//翻页 
const changePage = (e: number) => {
  request.nowPage = e;
  drwData(false )
}
onMounted(()=>{
    drwData(true)
})
</script>

<style lang="less" scoped>
.files {
    padding: @space-xl;
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 100%;

    &__tools {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: @space-l;
        border-radius: @radius-s;
        background: @bg-color-m;

        &-delete {
            width: 20px;
            height: 20px;
            color: @font-color-s;
            

            &:hover {
                color: @font-color-l;
                cursor: pointer;

            }
        }

        &-switch {
            width: 20px;
            height: 20px;
            color: @font-color-s;

            &:hover {
                color: @font-color-l;
                cursor: pointer;

            }
        }
    }
    &__main {
    padding: 24px 0 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    row-gap: 32px;
    column-gap: 24px;
    justify-content: center;
  }
   
}
.pagination {
    padding: @space-l 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    
  }
</style>