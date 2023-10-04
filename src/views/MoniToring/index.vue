<script setup>
import echarts from '@/components/echarts.vue'
import {ref} from 'vue'
import {
    LeftContEcharts, RightBotEcharts
} from '@/composabol/index.js'
const text=ref('订单走势')
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
                color: '#c5c5c5',  //更改坐标轴文字颜色
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
                color: '#373c4f',
                type: [5, 5], // [虚线宽度，虚线间隔]
            },
        },
        axisLabel: {
            textStyle: {
                color: '#c5c5c5',  //更改坐标轴文字颜色
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
            data: [62, 70, 40, 27, 67, 42, 91, 67, 65,95,8,32,84,70,16,44],
            type: 'line',
            color: '#531e28',
            areaStyle: {
                color: '#531e28'
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
////////////////////////////////////////////////////////////////
const text1=ref('类型分布')
let colorA = ["#968afc", "#fc8823", "#5fb876", '#73c0df'];
const option1 = ref({
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
                { value: 5, name: '网运' },
                { value: 15, name: '短途' },
                { value: 10, name: '上图' },
                { value: 8, name: '货运' }
            ]
        }
    ]
})
////////////////////////////////////////////////////////////////
const text2=ref('发件地分布')
const distance = [34, 7, 65, 5, 29, 77,14];
const option2=ref({
        xAxis: {
            type: 'category',
            data: ['深圳', '上海', '香港', '成都', '西安', '太原','厦门'],
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
                    color: '#09f2a8'
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
                        fontSize: '12',
                        color: '#92b6d4',
                        textShadowColor: ""
                    },
                }
            }
        ]
    })
////////////////////////////////////////////////////////////////
const text3=ref('目的地分布')
const distance1 = [8, 78, 72, 97, 74, 85,96];
const option3=ref({
        xAxis: {
            type: 'category',
            data: ['乌鲁木齐', '', '西安', '', '平顶山', '','贵阳'],
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
                data: distance1,
                type: 'bar',
                barWidth: 20,
                itemStyle: {
                    barBorderRadius: [100, 100, 100, 100],
                    color: '#01bdf1'
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
                        color: '#adb2c1',
                    },
                }
            }
        ]
    })
</script>
<template>
    <div class="moni">
        <div class="top">
            <div class="left">
                <LeftContEcharts />
                <RightBotEcharts />
            </div>
            <div class="rig"></div>
        </div>
        <div class="bom">
            <div ref="bomOne">
                <echarts :text="text" :option="option" />
            </div>
            <div ref="bomTow">
                <echarts :text="text1" :option="option1" />
            </div>
            <div ref="bomSpar">
                 <echarts :text="text2" :option="option2" />
            </div>
            <div ref="bomFpar">
                 <echarts :text="text3" :option="option3" />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.moni {
    width: 100%;
    height: calc(100vh - 66px);

    .top {
        height: 65%;
        width: 100%;
        display: flex;

        .left {
            width: calc(25% - 10px);
            height: 100%;
            margin-left: 5px;

            >div {
                height: 50%;
                border: 1px solid red;
            }
        }

        .rig {
            width: 75%;
            height: 100%;
        }
    }

    .bom {
        height: 35%;
        width: 100%;
        padding-top: 20px;
        display: flex;

        >div {
            border: 1px solid red;
            flex: 1;
            margin: 0 5px;
        }
    }
}</style>