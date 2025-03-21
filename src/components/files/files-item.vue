<template>
    <div class="file-item">
      <div 
        class="file-item__img" 
        :class="{ 'file-item--selected': props.data?.selected }"
      >
        <yk-image 
          :src="url" 
          :is-lazy="true" 
          width="200" 
          height="200" 
          fit="contain" 
        />
        
        <yk-space class="file-item__img--tool" size="s">
          <IconDeleteOutline class="files__tools-delete" @click="deleteFile" />
          
          <yk-popconfirm title="选择分组" placement="bottomRight"  @confirm="confirm">
            <IconSwitchOutline class="files__tools-switch" />
            
            <template #content>
              <yk-scrollbar height="148px" always>
                <div 
                  v-for="item in subsetStore.data" 
                  :key="item.id"
                  class="subset__item" 
                  :class="{'subset-selected': subsetSelectedId === item.id}"
                  @click="changeOption(item.id)"
                >
                  {{ item.name }} {{ item.value }}
                </div>
              </yk-scrollbar>
            </template>
          </yk-popconfirm>
        </yk-space>
  
        <div class="file-item__img--check" @click="checkFile">
          <IconTickMinOutline style="color: #fff; font-size: 24px;" />
        </div>
      </div>
  
      <div class="file-item__name">
        <p class="file-item__name-file">{{ props.data?.fileName }}</p>
        <p>.{{ props.data?.format }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref } from "vue";
  import type { FileData } from "../../utils/interface";
  import { useSubsetStore } from "../store/subset";
  
  import "./files.less";
  
  const emits = defineEmits(["changeSubsetId", "delete", "selected"]);
  const subsetStore = useSubsetStore();
  
  type FileItemProps = {
    data?: FileData;
  };
  
  const props = withDefaults(defineProps<FileItemProps>(), {});
  const url = computed(() => 
    props.data?.url ? new URL(`../../assets/images/${props.data.url}`, import.meta.url).href : ""
  );
  
  const subsetSelectedId = ref<number | string>(props.data?.subsetId || "");
  
  // 切换分组
  const changeOption = (id: number | string) => {
    subsetSelectedId.value = id;
  };
  
  // 确认分组选择
  const confirm = () => {
    if (subsetSelectedId.value !== props.data?.subsetId) {
      emits("changeSubsetId", {
        id: props.data?.id,
        subsetId: subsetSelectedId.value,
      });
    }
  };
  
  // 删除文件
  const deleteFile = () => {
    emits("delete", props.data?.id);
  };
  const checkFile=()=>{
    emits("selected",props.data?.id)
  }
  
  </script>
  
  <style lang="less" scoped>
  .file-item {
    &__img {
      position: relative;
      border-radius: @radius-s;
      border: 2px solid @bg-color-l;
      transition: all 0.3s;
  
      &:hover {
        background: @pcolor-1;
  
        .file-item__img--check,
        .file-item__img--tool {
          opacity: 1;
        }
      }
  
      &--tool, &--check {
        position: absolute;
        opacity: 0;
        transition: opacity 0.3s;
      }
  
      &--tool {
        right: @space-s;
        bottom: @space-s;
  
        .yk-icon {
          width: 32px;
          height: 32px;
          padding: 8px;
          background: rgba(255, 255, 255, 0.56);
          border-radius: @radius-m;
          cursor: pointer;
          transition: all @animatb;
  
          &:hover {
            color: @pcolor;
            background: rgba(255, 255, 255, 0.72);
            backdrop-filter: blur(2px);
          }
        }
      }
  
      &--check {
        width: 26px;
        height: 26px;
        left: @space-s;
        top: @space-s;
        background: @gray-4;
        border-radius: @radius-s;
        border: 1px solid rgba(255, 255, 255, 0.56);
        cursor: pointer;
  
        .yk-icon {
          opacity: 0;
        }
      }
    }
  
    &--selected {
      background: @pcolor-1;
      border: 2px solid @pcolor-3;
  
      .file-item__img--check {
        opacity: 1;
        background: @pcolor;
  
        .yk-icon {
          opacity: 1;
        }
      }
  
      &:hover .file-item__img--tool {
        opacity: 0;
      }
    }
  
    &__name {
      padding-top: @space-l;
      display: flex;
      justify-content: center;
  
      &-file {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }
  </style>
  