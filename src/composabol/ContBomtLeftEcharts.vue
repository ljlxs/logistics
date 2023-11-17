<script setup>
import 'echarts-wordcloud'
import { ref } from 'vue'
import echarts from '@/components/echarts.vue'
const text2 = ref("用时分布")
const option2 = ref({
    tooltip: {
        //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
        confine: true,
        enterable: true, //鼠标是否可以移动到tooltip区域内
    },
    radar: {
        name: {
            textStyle: {
                color: '#05D5FF',
                fontSize: 14,
            },
        },
        shape: 'polygon',
        center: ['50%', '50%'],
        radius: '80%',
        startAngle: 120,
        scale: true,
        axisLine: {
            lineStyle: {
                width: 0.2,
                color: '#e0a441',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 0.2,
                color: '#e0a441', // 设置网格的颜色
            },
        },
        indicator: [
            {
                name: '1天',
                max: 100,
            },
            {
                name: '2天',
                max: 100,
            },
            {
                name: '3天',
                max: 100,
            },
            {
                name: '4天',
                max: 100,
            },
            {
                name: '5天',
                max: 100,
            },
            {
                name: '6天',
                max: 100,
            },
            {
                name: '7天',
                max: 100,
            },
        ],
        splitArea: {
            show: false,
        },
    },
    grid: {
        position: 'center',
    },
    polar: {
        center: ['50%', '50%'], // 默认全局居中
        radius: '0%',
    },
    angleAxis: {
        min: 0,
        interval: 5,
        clockwise: false,
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    radiusAxis: {
        min: 0,
        interval: 20,
        splitLine: {
            show: false,
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        top: '4%',
        containLabel: true
    },
    series: [
        {
            name: '个人雷达图',
            type: 'radar',
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 10, // 拐点的大小
            itemStyle: { color: '#eba83a', borderColor: 'rgba(228, 171, 76,0.2)', borderWidth: 10, },
            lineStyle: { 
                color: 'rgba(127,255,210, 0.6)',
                width: 2 ,
            },
            
            areaStyle: {
                normal: {
                    color: '#a87726',
                    opacity: 0.5,
                },
            },
            lineStyle: {
                width: 2,
                color: '#a87726',
                type: [5, 5], // [虚线宽度，虚线间隔]
            },
            data: [
                {
                    value: [20, 50, 60, 60, 20, 20],
                },
            ],
        },
    ],
})
</script>
<template>
    <div class="right">
            <echarts :text="text2" :option="option2" />
    </div>
</template>
<style scoped lang="scss">
.right {
        flex: 1;
        height: 100%;
    }
</style>