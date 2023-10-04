<script setup>
import echarts from '@/components/echarts.vue'
import { ref, reactive } from 'vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const text = ref('投诉数量')
const chartOption = [
    {
        name: "语文",
        value: 100,
        valueUnit: "分",
        precent: 66.7,
        precentUnit: "%",
    }
]
const chartTitle = {
    title: '38929',
    subtitle: '投诉数量',
}
const chartTitle1 = {
    title: '50449',
    subtitle: '订单数量',
}
const option = ref({
    backgroundColor: '#000',
    tooltip: {
        show: false
    },
    title: [{
        text: `{title|${chartTitle.title}}\n{subtitle|${chartTitle.subtitle}}`,
        x: '19%',
        y: '33%',
        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    fontWeight: 400,
                    height: 30,
                    color: '#FFFFFF',
                    align: 'center'
                },
                subtitle: {
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#FFFFFF',
                    align: 'center',
                },
            }
        }
    }, {
        text: `{title|${chartTitle1.title}}\n{subtitle|${chartTitle1.subtitle}}`,
        x: '64%',
        y: '33%',
        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    fontWeight: 400,
                    height: 30,
                    color: '#FFFFFF',
                    align: 'center'
                },
                subtitle: {
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#FFFFFF',
                    align: 'center',
                },
            }
        }
    }],
    series: [
        {
            name: 'Access From',
            type: 'pie',
            center: ['25%', '45%'],
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            selectedOffset: 1,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: 20,
                    fontWeight: 'bold'
                },
                disabled: false,
                scale: false,
                scaleSize: 0
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#9588ff'
            },
            silent: true,
            data: chartOption
        },
        {
            name: 'Access From',
            type: 'pie',
            center: ['70%', '45%'],
            radius: ['45%', '65%'],
            avoidLabelOverlap: false,
            selectedOffset: 1,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: 20,
                    fontWeight: 'bold'
                },
                disabled: false,
                scale: false,
                scaleSize: 0
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#ff8a27'
            },
            silent: true,
            data: chartOption
        }
    ]
})
////////////////////////////////////////////////////////////////
const text1 = ref('问题分布')
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
    { name: "少件", value: 5 },
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
const option1 = ref({
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 30
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
////////////////////////////////////////////////////////////////////////
const text2 = ref('实时投诉')
const orders = reactive([
    {
        from: '西安',
        to: '上海',
        date: new Date().toLocaleString(),
        statusL: '保险问题',
        statusLs: '待处理',
        color: '#409534'
    },
    {
        from: '西安',
        to: '上海',
        date: new Date().toLocaleString(),
        statusL: '快递破损',
        statusLs: '待处理',
        color: '#7a201e'
    },
    {
        from: '西安',
        to: '上海',
        date: new Date().toLocaleString(),
        statusL: '破损',
        statusLs: '待处理',
        color: '##c57e3f'
    },
    {
        from: '西安',
        to: '上海',
        date: new Date().toLocaleString(),
        statusLs: '待处理',
        statusL: '外包装破损'
    },
    {
        from: '西安',
        to: '上海',
        date: new Date().toLocaleString(),
        statusL: '退货',
        statusLs: '待处理'
    },
])
////////////////////////////////////////////////////////////////
const text3 = ref('状态分布')
let colorA = ["#968afc", "#E8AE0B", "#5fb876", '#73c0df'];
const option3 = ref({
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
                { value: 8, name: '待处理' },
                { value: 15, name: '处理中' },
                { value: 10, name: '已处理' },
                { value: 5, name: '待评价' }
            ]
        }
    ]
})
////////////////////////////////////////////////////////////////
const text4 = ref('投诉排行')
const distance = [61, 82, 85, 21, 5, 52,30,26];
const option4=ref({
        xAxis: {
            type: 'category',
            data: ['丢件', '态度不好', '损坏', '时间慢', '少件', '客服问题','保险问题','破损'],
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
                    color: '#04ebb5'
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
////////////////////////////////////////////////////////////////////////
const text5 = ref('处理时间分布')
const distance2 = [10, 82, 85, 21, 5, 52,30];
const option5=ref({
        xAxis: {
            type: 'category',
            data: ['1天内', '2天内', '3天内', '4天内', '5天内', '7天内','其他'],
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
                data: distance2,
                type: 'bar',
                barWidth: 20,
                itemStyle: {
                    barBorderRadius: [100, 100, 100, 100],
                    color: '#de5f62'
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
////////////////////////////////////////////////////////////////////////////////////////////////
const text6 = ref("用时分布")
const option6 = ref({
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
        startAngle: 90,//旋转
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
                name: '1星',
                max: 100,
            },
            {
                name: '2星',
                max: 100,
            },
            {
                name: '3星',
                max: 100,
            },
            {
                name: '4星',
                max: 100,
            },
            {
                name: '5星',
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
                    value: [10, 70, 60, 60, 65, 20],
                },
            ],
        },
    ],
})
////////////////////////////////////////////////////////////////
const text7 = ref("数量走势")
const option7 = ref({
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['06-07', '06-08', '06-09', '06-10', '06-11', '06-12', '06-1'],
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
            data: [5, 77, 49, 7, 69, 29, 18],
            type: 'line',
            color: '#9c3131',
            areaStyle: {
                color: '#9c3131'
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
const text8 = ref("来源分布")
var data = [
    {
        month: '电话投诉',
        value: 48,
    },

    {
        month: '淘宝投诉',
        value: 43,
    },

    {
        month: '网络投诉',
        value: 38,
    },

    {
        month: '京东投诉',
        value: 70,
    },

    {
        month: '客服投诉',
        value: 92,
    },
];
var xData = [],
    yData = [];

var min = 50;
data.map(function (a, b) {
    xData.push(a.month);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
const option8 = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0,
            },
        },
        formatter: function (prams) {
            if (prams[0].data === min) {
                return '活动分析：0%';
            } else {
                return '活动分析：' + prams[0].data;
            }
        },
    },
    grid: {
        left: '8%',
        top: '7%',
        right: '5%',
        bottom: '12%',
        // containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            gridIndex: 0,
            data: xData,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#0c3b71',
                },
            },
            axisLabel: {
                show: true,
                color: 'rgb(170,170,170)',
                fontSize: 14,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            // name:"单位:户",
            nameTextStyle: {
                color: 'rgb(170,170,170)',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)', //网格线的颜色
                    type: 'dashed',
                },
            },
            // min: min,
            max: 100,
            axisLine: {
                show: true,
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value}',
            },
        },
    ],
    series: [
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                    borderRadius: [5, 5, 5, 5],
                    color: '#ff4b53',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [30, 8],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            data: yData,
            // width: 25,
            z: 0,
            zlevel: 8,
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
        },
    ],
};
</script>
<template>
    <div class="complaint">
        <div>
            <echarts :text="text" :option="option" />
        </div>
        <div>
            <echarts :text="text1" :option="option1" />
        </div>
        <div class="Cont">
            <p>{{ text2 }}</p>
            <div class="list">
                <div class="th">
                    <div class="tr">问题</div>
                    <div class="tr">时间</div>
                    <div class="tr">状态</div>
                </div>
                <vue3-seamless-scroll :list="orders" class="scroll">
                    <div class="item" v-for="(item, index) in orders" :key="index">
                        <span>{{ item.statusL }}</span>
                        <span class="trimes">{{ item.date }}</span>
                        <span style="color:#1f176a">{{ item.statusLs }}</span>
                    </div>
                </vue3-seamless-scroll>
            </div>
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
.complaint {
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

    .Cont {
        height: 33%;
        border: 1px solid red;
        margin: 5px 0;
        padding: 10px;
        box-sizing: border-box;

        >p {
            color: #519aa4;
        }

        .list {
            margin-top: 10px;
            padding-top: 5px;
            height: calc(100% - 38px);

            .th {
                display: flex;
                width: 100%;
                background: #2aa7ed;
                color: white;
                border-radius: 2px;
                justify-content: space-evenly;

                .tr {
                    text-align: center;
                }
            }

            .scroll {
                height: 97%;
                overflow: hidden;
            }

            .item {
                color: white;
                display: flex;
                justify-content: space-evenly;
                padding: 10px 0;
                height: 100%;
                >span {
                    text-align: center;
                }

            }
        }
    }

}</style>