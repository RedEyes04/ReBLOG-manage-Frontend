<template>
    <!-- 头像 -->
    <yk-space size="m" class="reply">
        <yk-avatar img-url="https://bucket.redeyes.top/avater.webp"></yk-avatar>

        <yk-space dir="vertical" size="s" class="reply__main">
            <div class="reply__name">
                <yk-text strong>
                    REDEYES
                </yk-text>
                <yk-text style="font-size: 12px;" type="third">
                    2025-3-4 00:01:21
                </yk-text>
            </div>


            <yk-text type="secondary">
                这是一条评论
            </yk-text>
            <yk-space size="s" align="center">
                <yk-tag type="primary" >
                    我是标签
                </yk-tag>
                <yk-text type="danger ">
                    举报 4
                </yk-text>
            </yk-space>

        </yk-space>
    </yk-space>


</template>

<script lang="ts" setup>

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