<template>
    <!-- 头像 -->
    <yk-space size="m" class="reply">
        <yk-avatar img-url="https://bucket.redeyes.top/avater.webp"></yk-avatar>

        <yk-space dir="vertical" size="s" class="reply__main">
            <div class="reply__name">
                <yk-text strong>
                    {{ content?.user.name }}
                </yk-text>
                <yk-text style="font-size: 12px;" type="third">
                    {{ content?.moment }}
                </yk-text>
            </div>


            <yk-text type="secondary">
                {{ content?.comment }}
            </yk-text>
            <yk-space size="s" align="center">
                <yk-tag type="primary" >
                    {{ content?.article?.title }}
                </yk-tag>
                <yk-text type="danger "
                v-show="content?.complaint!>0"
                >
                    举报 {{ content?.complaint }}
                </yk-text>
            </yk-space>

        </yk-space>
    </yk-space>


</template>

<script lang="ts" setup>
import type { ReplyProps } from './reply';
const props = withDefaults(defineProps<ReplyProps>(),{
  isComment:true
})
</script>

<style lang="less" scoped>
.reply {
    &__name {
        display: flex;
        flex-direction: column;
    }
    &__main{
        border-bottom: 1px solid @line-color-s;
        width: 100%;
        padding-bottom: @space-l;
    }
}
</style>