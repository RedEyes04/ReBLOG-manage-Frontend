<template>
    <div class="head-bar">
        <yk-space align="center" :size=12>
            <img src="../../assets/icon透明1.png" class="logo">
            <span class="name">ReBLOG管理后台</span>
        </yk-space>
        <yk-space align="center" size="xl">
            <yk-badge is-dot>
                <IconMailOutline style="font-size: 25px;"/>
            </yk-badge>
            <yk-avatar img-url=" https://bucket.redeyes.top/avater.webp"></yk-avatar>
            <div>
                <yk-theme style="font-size: 25px;"/>
            </div>
            <yk-button>退出</yk-button>
        </yk-space>
    </div>

</template>

<script lang="ts">

</script>

<style lang="less" scoped>
.head-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: @bg-color-l;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 @space-xl;
    .logo{
        height: 100px;
        width: 150x;
    }
    .name{
        font-weight: 600 ;
        font-size: 20px;
        
    }
}

</style>