<script setup>
import { ref } from 'vue'
import echarts from '@/components/echarts.vue'
const text = ref("订单统计")
const option = ref({
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['06-02', '06-03', '06-04', '06-05', '06-06', '06-07', '06-08'],
        axisLine: {
            // 轴线设置
            show: false, // 显示轴线
            lineStyle: {
                    // 轴线样式设置
                    color: '', // 轴线颜色
                }
        },
        axisLabel: {
            textStyle: {
                color: '#F5F5F5',  //更改坐标轴文字颜色
                fontSize: 12     //更改坐标轴文字大小
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            // 轴线设置
            show: true, // 显示轴线
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#979797',
                type: [5, 5], // [虚线宽度，虚线间隔]
            },
        },
        axisLabel: {
            textStyle: {
                color: '#F5F5F5',  //更改坐标轴文字颜色
                fontSize: 12     //更改坐标轴文字大小
            }
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
            data: [67, 517, 761, 511, 709, 557, 479],
            type: 'line',
            color: '#319126',
            areaStyle: {
                color: '#2c7c2c'
            },
            label: {
                show: true,
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (val) {
                        return val.value;
                    }
                },
                textStyle: {
                    // 数值样式
                    color: '#adb2c1'
                }
            }
        }
    ]
})
</script>
<template>
    <div class="bomt">
        <echarts :text="text" :option="option" />
    </div>
</template>
<style scoped lang="scss">
.bomt {
    width: 100%;
    border: 1px solid red;
    height: 32%;
}
</style>