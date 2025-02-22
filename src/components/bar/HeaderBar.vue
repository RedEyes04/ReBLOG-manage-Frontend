<template>
    <div class="head-bar">
        <yk-space align="center" :size="12" style="cursor: pointer;" @click="backHome">
            <img src="../../assets/icon透明1.png" class="logo">
            <span class="name">ReBLOG管理后台</span>
        </yk-space>
        <yk-space align="center" size="xl">
            <yk-badge is-dot>
                <IconMailOutline style="font-size: 20px;"/>
            </yk-badge>
            <yk-avatar img-url="https://bucket.redeyes.top/avater.webp"></yk-avatar>
            <div>
                <yk-theme style="font-size: 20px;"/>
            </div>
            <yk-button>退出</yk-button>
        </yk-space>
    </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        
        const backHome = () => {
            router.push('/');
        };

        return {
            backHome
        };
    }
};
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

    .logo {
        height: 95px; /* 这里设置logo的高度 */
        width: 130px;  /* 这里设置logo的宽度 */
    }

    .name {
        font-weight: 600;
        font-size: 20px;
    }
}
</style>
