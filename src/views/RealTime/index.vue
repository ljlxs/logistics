<script setup>
import {
    LeftTopEcharts, LeftContEcharts,
    RightTopEcharts
} from '@/composabol/index.js'
</script>
<template>
    <div class="index">
        <div class="conten"></div>
        <div class="right">
            <LeftTopEcharts />
            <LeftContEcharts />
            <RightTopEcharts />
        </div>
    </div>
</template>


<style scoped lang='scss'>
.index {
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 66px);
    display: flex;

    .conten {
        width: 75%;
        height: 100%;
        border: 1px solid red;
        padding-top: 10px;
        box-sizing: border-box;
    }

    .right {
        width: 25%;
        height: 100%;
        padding-top: 10px;
    }
}
</style>
