<template>
   <yk-drawer placement="right" :show="active" @close="closes">
    <template #header>
      <h2>
        <IconBulbOutline />
        非常大的字
      </h2>
    </template>
    <h3>你看到了什么？</h3>
    
  </yk-drawer>
</template>

<script lang = "ts" setup>
import type { InformationProps } from '../reply/reply';
import { toRefs} from 'vue';

const props = withDefaults(defineProps<InformationProps>(), {
  active: false

})
const {active} = toRefs(props)

const emits = defineEmits(["close"])
const closes= ()=>{
  emits("close",false)
}
</script>

<style lang = "less" scoped>

</style>