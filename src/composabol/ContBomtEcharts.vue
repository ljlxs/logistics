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
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        top: '4%',
        containLabel: true
    },
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

</script>
<template>
    <div class="Bom">
        <div class="left">
            <echarts :text="text" :option="option" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.Bom {
    width: 100%;
    flex: 1;
    display: flex;
    height: 100%;

    .left {
        flex: 1;
        height: 100%;
        margin-right: 5px;
    }

    
}
</style>