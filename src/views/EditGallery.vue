<template>
  <div class="edit-gallery">
    <div class="edit-gallery__topbar">
        <p class="edit-gallery__topbar--title" >新建摄影图库</p>
        <yk-space>
            <yk-button type="secondary">取消</yk-button>
            <yk-button>发布</yk-button>

        </yk-space>
    </div>
    <yk-space style="width: 100%;">
        <editPhotoVue/>
        <div class="edit-form">
            <formsVue style="width: 420px;"/>
        </div>
    </yk-space>
  </div>
</template>

<script lang = "ts" setup>
import editPhotoVue from '../components/gallery/edit-photo.vue';
import formsVue from '../components/forms/forms.vue'
</script>

<style lang = "less" scoped>
.edit-gallery{
    padding: @space-xl 80px;
   
    &__topbar {
        border-radius: @radius-m;
        background-color: @bg-color-l;
        padding: @space-l @space-xl;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: @space-l;
        
        &--title{
            .font-xl();
            font-weight: 600;
        }
    }
    .edit-form{
        background: @bg-color-l;
        height:400px ;
        // width: 100%;
        flex: none;
        display: flex;
        padding: 24px;
        justify-content: center;
    }
    
}
</style>