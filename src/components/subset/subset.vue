<template>
 <div class="subset">分组</div>
</template>

<script lang = "ts" setup>
import {subset,state} from "../../mock/data"
import type { SubsetData } from "../../utils/interface";
import { useSubsetStore } from "../store/subset";
</script>

<style lang = "less" scoped>
 .subset{
    padding: @space-m @space-xl;
    border-radius: @radius-m;
    background-color: @bg-color-l;
    width: 100%;
 }
</style>