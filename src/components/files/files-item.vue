<template>
    <div class="file-item">
        <yk-text>
            <div class="file-item__img" :class="{'file-item--selected':props.data?.selected}">
                <yk-image :src="url" :is-lazy="true" width="200"
                height="200" fit="contain"></yk-image>
                <yk-space class="file-item__img--tool" size="s">
                    <IconDeleteOutline class="files__tools-delete" />
                    <IconSwitchOutline class="files__tools-switch" />
                </yk-space>
                <div class="file-item__img--check">
                    <IconTickMinOutline style="color: #fff;
                font-size: 24px;"/>
                </div>
            </div>
            {{ props.data.fileName }}.{{ props.data.format }}
        </yk-text>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import type { FileData } from '../../utils/interface';

type FileItemProps = {
    data?: FileData
}

const props = withDefaults(defineProps<FileItemProps>(), {})

const url = computed(() => {
    return props.data?.url ? new URL(`../../assets/images/${props.data.url}`, import.meta.url).href : ''
})
</script>

<style lang="less" scoped>
.file-item {
  &__img {
    position: relative;
    border-radius: @radius-s;
    border: 2px solid @bg-color-l;

    &--tool {
      position: absolute;
      right: @space-s;
      bottom: @space-s;
      opacity: 0;

      .yk-icon {
        width: 32px;
        height: 32px;
        padding: 8px;
        background: rgba(255, 255, 255, 0.56);
        border-radius: @radius-m;
        transition: all @animatb;
        cursor: pointer;

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
      border-radius: @radius-s;
      background: @gray-4;
      position: absolute;
      left: @space-s;
      top: @space-s;
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.56);
      opacity: 0;

      .yk-icon {
        opacity: 0;
      }
    }

    &:hover {
      background: @pcolor-1;

      .file-item__img--check {
        opacity: 1;
      }

      .file-item__img--tool {
        opacity: 1;
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

    .file-item__img--tool {
      opacity: 0;
    }

    &:hover {
      .file-item__img--tool {
        opacity: 0;
      }
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
