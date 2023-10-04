<script setup>
// src="js/echarts-wordcloud.js"
import 'echarts-wordcloud'
import { ref } from 'vue'
import echarts from '@/components/echarts.vue'
const text = ref("热门投诉")
const datas = [
    { name: "破损", value: 25 },
    { name: "丢件", value: 28 },
    { name: "损坏", value: 24 },
    { name: "少件", value: 3 },
    { name: "破损", value: 26 },
    { name: "损坏", value: 22 },
    { name: "保险问题", value: 23 },
    { name: "时间慢", value: 21 },
    { name: "丢件", value: 25 },
    { name: "少件", value:5 },
    { name: "态度不好", value: 20 },
    { name: "时间慢", value: 27 },
    { name: "保险问题", value: 26 },
    { name: "态度不好", value: 11 },
    { name: "态度不好", value: 18 },
    { name: "客服问题", value: 6 },
    { name: "少件", value: 9 },
    { name: "客服问题", value: 7 },
    { name: "态度不好", value: 13 },
    { name: "少件", value: 8 },
]
const option = ref({
    // tooltip: {
    //     show: true,
    //     position: 'top',
    //     textStyle: {
    //         fontSize: 30
    //     }
    // },
    series: [{
        type: "wordCloud",
        // 网格大小，各项之间间距
        gridSize: 20,
        // 形状 circle 圆，cardioid  心， diamond 菱形，
        // triangle-forward 、triangle 三角，star五角星
        shape: 'circle',
        // 字体大小范围
        sizeRange: [10, 30],
        // 文字旋转角度范围
        rotationRange: [0, 90],
        // 旋转步值
        rotationStep: 90,
        // 自定义图形
        // maskImage: maskImage,
        left: "5",
        top: '5',
        right: null,
        bottom: '5',
        // 画布宽
        width: '100%',
        // 画布高
        height: '80%',
        // 是否渲染超出画布的文字
        drawOutOfBound: false,
        textStyle: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 200 + 55),
                        Math.round(Math.random() * 200 + 55),
                        Math.round(Math.random() * 200 + 55)
                    ].join(',') + ')';
                },
            emphasis: {
                shadowBlur: 15,
                shadowColor: '#2ac'
            }
        },
        data: datas
    }]
})
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
    series: [
        {
            name: '个人雷达图',
            type: 'radar',
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 10, // 拐点的大小
            itemStyle: { color: '#eba83a', borderColor: 'rgba(228, 171, 76,0.2)', borderWidth: 10, },
            lineStyle: { color: 'rgba(127,255,210, 0.6)', width: 2 },
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
    <div class="Bom">
        <div class="left">
            <echarts :text="text" :option="option" />
        </div>
        <div class="right">
            <echarts :text="text2" :option="option2" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.Bom {
    width: 100%;
    flex: 1;
    display: flex;
    height: 32%;

    .left {
        flex: 1;
        border: 1px solid red;
        height: 100%;
        margin-right: 5px;
    }

    .right {
        flex: 1;
        border: 1px solid red;
        height: 100%;
    }
}
</style>