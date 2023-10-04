<script setup>
import { ref } from 'vue'
import echarts from '@/components/echarts.vue'
const text = ref("网点统计")
let colorA = ["#968afc", "#E8AE0B", "#5fb876", '#73c0df'];
const option = ref({
    legend: {
        top: 'center',
        right: 'right',
        textStyle: {
            color: '#FFF'
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [0, 70],
            center: ['35%', '50%'],
            roseType: 'area',
            color: colorA,
            itemStyle: {
                borderRadius: 1
            },
            data: [
                { value: 15, name: '区域物流中心' },
                { value: 15, name: '市区物流中心' },
                { value: 10, name: '县镇物流中心' },
                { value: 1, name: '小区配送网点' }
            ]
        }
    ]
})
</script>
<template>
    <div class="RigBomt">
        <echarts :text="text" :option="option" />
    </div>
</template>
<style scoped lang="scss">
.RigBomt {
    width: 100%;
    border: 1px solid red;
    height: 32%;
}
</style>