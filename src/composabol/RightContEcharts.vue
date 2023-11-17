<script setup>
import { ref } from 'vue'
import echarts from '@/components/echarts.vue'
const text=ref("人员类型占比")
const distance = [61, 82, 85, 21, 5, 52];
const option=ref({
        xAxis: {
            type: 'category',
            data: ['配送员', '人事', '管理', '运送', '阵营', '客服'],
            axisLine: {
                // 轴线设置
                show: false, // 显示轴线
                lineStyle: {
                    // 轴线样式设置
                    color: '', // 轴线颜色
                    width: 1, // 轴线宽度
                    type: 'dashed' // 轴线类型-虚线
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
                    type: [5, 10],
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
                data: distance,
                type: 'bar',
                barWidth: 20,
                itemStyle: {
                    barBorderRadius: [100, 100, 100, 100],
                    color: '#e94e20'
                },
                label: {
                    show: true,
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: function (val) {
                            return val.value + '米';
                        }
                    },
                    textStyle: {
                        // 数值样式
                        color: '#adb2c1',
                    },
                }
            }
        ]
    })
</script>
<template>
    <div class="RigCont">
        <echarts :text="text" :option="option"/>
    </div>
</template>
<style scoped lang="scss">
.RigCont {
    width: 100%;
    margin: 5px 0;
    height: 100%;
    }
</style>