<script setup>
import echarts from '@/components/echarts.vue'
import 'echarts-wordcloud'
import { ref, reactive } from 'vue'
const today = reactive({
    in: '454415',
    end: '171774'
})
const text = ref('数量统计')
////////////////////////////////////////////////////////////////
const text1 = ref('类型分布')
let colorA = ["#968afc", "#E8AE0B", "#5fb876", '#73c0df'];
const option1 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
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
                borderRadius: 8
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
////////////////////////////////////////////////////////////////
const text2 = ref('状态分布')
const distance = [88, 21, 49, 72, 1];
const option2 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
    xAxis: {
        type: 'category',
        data: ['带配送', '配送中', '已配送', '已送达', '已签收'],
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
                color: '#0bf0a2'
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
////////////////////////////////////////////////////////////////
const text3 = ref('数量走势')
const option3 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
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
            color: '#a53434',
            areaStyle: {
                color: '#a53434'
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
const text4 = ref('次数分布')
const distance1 = [81, 83, 93];
const option4 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
    xAxis: {
        type: 'category',
        data: ['第一次配送', '第二次配送', '第三次配送'],
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
                color: '#0299d8'
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
////////////////////////////////////////////////////////////////
const text5 = ref('人员类型')
let colorA1 = ["#9689ff", "#ff8b27", "#5db979", '#74c1df', '#4fd33c'];
const option5 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
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
            color: colorA1,
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 9, name: '配送员' },
                { value: 5, name: '档案员' },
                { value: 10, name: '司机' },
                { value: 15, name: '人事' },
                { value: 1, name: '主管' }
            ]
        }
    ]
})
////////////////////////////////////////////////////////////////
const text6 = ref('数量排行')
const distance2 = [66, 63, 57, 39, 24, 17, 11, 4];
const option6 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
    xAxis: {
        type: 'category',
        data: ['王黎明', '张乐乐', '王利民', '张思思', '赵盼盼', '赵盼盼1', '赵盼2', '赵盼盼3'],
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
                type: [5, 5],
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
            data: distance2,
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                barBorderRadius: [100, 100, 100, 100],
                color: '#e17a22'
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
////////////////////////////////////////////////////////////////
const text7 = ref('配送时间')
const option7 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
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
            data: [84, 26, 71, 48, 98, 94, 25, 85, 26, 39, 7, 95],
            type: 'line',
            color: '#a34a81',
            areaStyle: {
                color: '#a34a81'
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
const text8 = ref("区域分布")
const datas = [
    { name: '黑龙江', value: 20 },
    { name: '内蒙古', value: 21 },
    { name: "吉林", value: 12 },
    { name: '北京市', value: 18 },
    { name: "辽宁", value: 19 },
    { name: "河北", value: 14 },
    { name: "天津", value: 5 },
    { name: "山西", value: 10 },
    { name: "陕西", value: 9 },
    { name: "甘肃", value: 8 },
    { name: "宁夏", value: 13 },
    { name: "青海", value: 23 },
    { name: "新疆", value: 10 },
    { name: "西藏", value: 13 },
    { name: "四川", value: 15 },
    { name: "重庆", value: 16 },
    { name: "山东", value: 17 },
    { name: "河南", value: 25 },
    { name: "江苏", value: 20 },
    { name: "安徽", value: 25 },
    { name: "湖北", value: 20 },
    { name: "浙江", value: 15 },
    { name: "福建", value: 13 },
    { name: "江西", value: 12 },
    { name: "湖南", value: 11 },
    { name: "贵州", value: 17 },
    { name: "云南", value: 16 },
    { name: "广东", value: 10 }, ,
    { name: "广西", value: 13 },
    { name: "海南", value: 15 },
    { name: "台湾", value: 5 },
    { name: "上海", value: 7 },
]
const option8 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 20
        }
    },
    series: [{
        type: "wordCloud",
        // 网格大小，各项之间间距
        gridSize: 20,
        // 形状 circle 圆，cardioid  心， diamond 菱形，
        // triangle-forward 、triangle 三角，star五角星
        shape: 'circle',
        // 字体大小范围
        sizeRange: [5, 30],
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
    <div class="DistriBution">
        <div class="top">
            <p>{{ text }}</p>
            <div class="list">
                <p>订单数:</p>
                <div class="item orange" v-for="(item, index) in today.in" :key="index">
                    {{ item }}
                </div>
            </div>
            <div class="list">
                <p>员工数:</p>
                <div class="item green" v-for="(item, index) in today.end" :key="index">
                    {{ item }}
                </div>
            </div>
        </div>
        <div>
            <echarts :text="text1" :option="option1" />
        </div>
        <div>
            <echarts :text="text2" :option="option2" />
        </div>
        <div>
            <echarts :text="text3" :option="option3" />
        </div>
        <div>
            <echarts :text="text4" :option="option4" />
        </div>
        <div>
            <echarts :text="text5" :option="option5" />
        </div>
        <div>
            <echarts :text="text6" :option="option6" />
        </div>
        <div>
            <echarts :text="text7" :option="option7" />
        </div>
        <div>
            <echarts :text="text8" :option="option8" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.DistriBution {
    width: 100%;
    height: calc(100vh - 66px);
    display: flex;
    flex-wrap: wrap;

    >div {
        width: 33%;
        height: 33%;
        margin: 2px;
        border: 1px solid red;
    }

    .top {
        >p {
            color: #519aa4;
            margin: 5px;
        }

        .list {
            color: white;
            display: flex;
            align-items: center;
            margin-top: 10px;

            >p {
                margin: 0 15px;
            }

            .item {
                font-size: 40px;
                padding: 15px;
                background: #1f2120;
                margin: 10px;
            }

            .orange {
                color: #d77629;
            }

            .green {
                color: #66b658;
            }

            .red {
                color: #b95151;
            }
        }
    }

}
</style>