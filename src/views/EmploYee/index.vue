<script setup>
import echarts from '@/components/echarts.vue'
import { ref, reactive } from 'vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const text=ref('员工数量分布')
var data = [
     { name: '黑龙江', value: 300 },
    { name: '内蒙古', value: 510 },
    { name: "吉林", value: 320 },
    { name: '北京市', value: 380 },
    { name: "辽宁", value: 490 },
    { name: "河北", value: 440 },
    { name: "天津", value: 50 },
    { name: "山西", value: 100 },
    { name: "陕西", value: 90},
    { name: "甘肃", value: 80 },
    { name: "宁夏", value: 230 },
    { name: "青海", value: 330 },
    { name: "新疆", value: 200 },
    { name: "西藏", value: 230 },
    { name: "四川", value: 350 },
    { name: "重庆", value: 360 },
    { name: "山东", value: 370 },
    { name: "河南", value: 350 },
    { name: "江苏", value: 300 },
    { name: "安徽", value: 350 },
    { name: "湖北", value: 200 },
    { name: "浙江", value: 250 },
    { name: "福建", value: 230 },
    { name: "江西", value: 220 },
    { name: "湖南", value: 210 },
    { name: "贵州", value: 270 },
    { name: "云南", value: 260 },
    { name: "广东", value: 200 }, ,
    { name: "广西", value: 230 },
    { name: "海南", value: 250 },
    { name: "台湾", value: 350 },
    { name: "上海", value: 370 },
];
var xData = [],
    yData = [];

var min = 30;
data.map(function (a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
const option = {
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
        bottom: '40%',
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
                fontSize: 12,
                interval: 0, 
                rotate: 50
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
            max: 500,
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
            symbolSize: [10, 10],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            data: yData,
            width: 5,
            z: 0,
            zlevel: 8,
        },
    ],
};
////////////////////////////////////////////////////////////////
const text1 = ref('职位分布')
const distance = [61, 82, 85, 21, 15, 52,30,26];
const option1=ref({
        xAxis: {
            type: 'category',
            data: ['配送员', '一库管', '资料员', '人事HR', '行政管理', '货运司机','客服','区域经理'],
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
                interval:0,
                rotate: 50,
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
                    color: '#0aefa0'
                }
            }
        ]
    })
////////////////////////////////////////////////////////////////
const text2 = ref('状态分布')
let colorA = ["#968afc", "#E8AE0B", "#5fb876", '#73c0df'];
const option2 = ref({
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
                { value: 15, name: '工作中' },
                { value: 15, name: '实习中' },
                { value: 10, name: '离职中' },
                { value: 1, name: '已离职' }
            ]
        }
    ]
})
////////////////////////////////////////////////////////////////
const text3 = ref('数量走势')
const option3 = ref({
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
            color: '#007f62',
            areaStyle: {
                color: '#007f62'
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
////////////////////////////////////////////////////////////////////////
const text4 = ref('职位分布')
const distance2 = [90, 39, 82, 67, 37, 87,49,60];
const option4=ref({
        xAxis: {
            type: 'category',
            data: ['30-40', '40-50','50-60', '60-70', '70-80', '80-90', '90-100','>100'],
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
                interval:0,
                rotate: 50,
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
////////////////////////////////////////////////////////////////
const text5 = ref('离职原因分布')
const datas = [
    { name: "受委屈", value: 25 },
    { name: "太辛苦", value: 28 },
    { name: "干不了", value: 24 },
    { name: "工资低", value: 3 },
    { name: "岗位不匹配", value: 26 },
    { name: "家庭原因", value: 22 },
    { name: "岗位不匹配", value: 23 },
    { name: "太辛苦", value: 21 },
    { name: "岗位不匹配", value: 25 },
    { name: "家庭原因", value: 5 },
    { name: "干不了", value: 20 },
    { name: "太辛苦", value: 27 },
    { name: "家庭原因", value: 26 },
    { name: "工资低", value: 11 },
    { name: "干不了", value: 18 },
    { name: "工资低", value: 9 },
    { name: "太辛苦", value: 13 },
    { name: "岗位不匹配", value: 8 },
]
const option5 = ref({
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
////////////////////////////////////////////////////////////////
const text6 = ref('学历分布')
var data = [
     { name: '文盲', value: 100 },
    { name: '小学', value: 110 },
    { name: "初中", value: 120 },
    { name: '高中', value: 180 },
    { name: "中专", value: 390 },
    { name: "本科", value: 240 },
    { name: "研究生", value: 50 },
    { name: "博士", value: 100 },
];
var xData2 = [],
    yData2 = [];

var min = 30;
data.map(function (a, b) {
    xData2.push(a.name);
    if (a.value === 0) {
        yData2.push(a.value + min);
    } else {
        yData2.push(a.value);
    }
});
const option6 = {
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
        bottom: '40%',
        // containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            gridIndex: 0,
            data: xData2,
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
                fontSize: 12,
                interval: 0, 
                rotate: 50
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
            max: 500,
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
                    color: '#8cc771',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [15, 10],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            data: yData2,
            width: 5,
            z: 0,
            zlevel: 8,
        },
    ],
};
////////////////////////////////////////////////////////////////
const text7 = ref('年龄分布')
const option7 = ref({
    tooltip: {
        //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
        confine: true,
        enterable: true, //鼠标是否可以移动到tooltip区域内
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
        },
        shape: 'polygon',
        center: ['50%', '55%'],
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
                name: '20-25',
                max: 100,
            },
            {
                name: '25-30',
                max: 100,
            },
            {
                name: '30-40',
                max: 100,
            },
            {
                name: '40-50',
                max: 100,
            },
            {
                name: '50-60',
                max: 100,
            }
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
////////////////////////////////////////////////////////////////
const text8 = ref('性别分布')
let color = ["#ff8b26", "#9688ff"];
const option8 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: 'center',
    right: 'right',
    left:'85%',
    textStyle: {
            color: '#FFF'
        }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '70%'],
      color: color,
      itemStyle: {
        borderRadius: 50,
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      data: [
        { value: 1048, name: '男' },
        { value: 735, name: '女' },
      ]
    }
  ]
};
</script>
<template>
    <div class="employee">
        <div>
            <echarts :text="text" :option="option" />
        </div>
        <div>
            <echarts :text="text1" :option="option1" />
        </div>
        <div class="Cont">
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
.employee {
    display: grid;
    grid-template-columns:1fr 1fr 1fr;/* 设置列和行的尺寸。 */
    grid-template-rows: repeat(3,32.6%);/* 设置列和行的尺寸。 */
    grid-gap: calc(100vw*10/1920);
    height: 100%;
    height:calc(100vh - calc(100vw*45/1920));
    padding: calc(100vw*10/1920);
    box-sizing: border-box;
    >div{
        border: 1px solid red;
        height: 100%;
        width: 100%;
    }
}
</style>