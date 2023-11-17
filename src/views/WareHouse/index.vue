<script setup>
import { ref } from 'vue'
import echarts from '@/components/echarts.vue'
const text = ref('当前库存')
let colorA = ["#9688ff", "#ff8b2b",];
import 'echarts/extension/bmap/bmap';
import china from '@/assets/china.js'
const option = ref({
    legend: {
        top: 'center',
        right: 'right',
        textStyle: {
            color: '#FFF',
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
                { value: 15, name: '物流数量' },
                { value: 5, name: '剩余容量' },
            ]
        }
    ]
})
////////////////////////////////////////////////////////
const text1 = ref('入库走势')
const option1 = ref({
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
            color: '#079a68',
            areaStyle: {
                color: '#079a68'
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
const text2 = ref('出库走势')
const option2 = ref({
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
            data: [761, 517, 561, 111, 609, 257, 579],
            type: 'line',
            color: '#8e3215',
            areaStyle: {
                color: '#8e3215'
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
const text4 = ref("")
  var allData = {
        citys: [
          {
            name: "延寿",
            value: [128.331644, 45.451897, 2],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "临江",
            value: [126.918087, 41.811979, 2],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "嘉兴",
            value: [120.755486, 30.746129, 4],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "四平",
            value: [124.350398, 43.16642, 1],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "营口",
            value: [122.235418, 40.667012, 1],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "密云",
            value: [116.801346, 40.35874, 1],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "威海",
            value: [122.12042, 37.513068, 32],
            symbolSize: 3,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "杭州",
            value: [120.15507, 30.274085, 10],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "集安",
            value: [126.194031, 41.125307, 1],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "贵阳",
            value: [106.630154, 26.647661, 2],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "抚顺",
            value: [123.957208, 41.880872, 3],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "海门",
            value: [121.181615, 31.871173, 2],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "珠海",
            value: [113.576726, 22.270715, 9],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "河北",
            value: [114.475704, 38.584854, -19],
            symbolSize: 12,
            itemStyle: { normal: { color: "#58B3CC" } },
          },
          {
            name: "深圳",
            value: [114.057868, 22.543099, 14],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "黄浦",
            value: [121.484443, 31.231763, 1],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "蓬莱",
            value: [120.758848, 37.810661, 1],
            symbolSize: 12,
            itemStyle: { normal: { color: "#F58158" } },
          },
          {
            name: "吉林",lineStyle: { normal: { color: "#fdcc26" } },
            value: [126.549572, 43.837883, -364],
            symbolSize: 14,
            itemStyle: { normal: { color: "#58B3CC" } },
          },
        ]
      };

  let option4 = {
        title: {
          left: "center",
          textStyle: {
            color: "#fff",
          },
        }, 
        geo: {
          map: "china",
          zoom:1.5,
          top:'100px',
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: false, //是否允许缩放
          itemStyle: {
            normal: {
              color: "rgba(51, 69, 89, .5)", //地图背景色
              borderColor: "#516a89", //省市边界线00fcff 516a89
              borderWidth: 1,
            },
            emphasis: {
              color: "rgba(37, 43, 61, .5)", //悬浮背景
            },
          },
        },
        series: [
          {
            name: "地点",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              brushType: "stroke", //波纹绘制方式 stroke，fill
              period: 4, //动画时间，值越小速度越快
              scale: 4, //波纹圆环最大显示，值越大波纹越大
            },
            label: {
              emphasis: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
            },
            symbolSize: 12,
            showEffectOn: "render",
            itemStyle: {
              normal: {
                color: "#46bee9",
              },
            },
            data: allData.citys,
            
          },
          {
            name: "线路",
            type: "lines",
            coordinateSystem: "geo",
            zlevel: 2,
            large: true,
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: "arrow", //箭头图标，pin 圆点
              symbolSize: 3, //图标大小
              trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
            },
            lineStyle: {
              normal: {
                width: 2, //尾迹线条宽度
                opacity: 0.2, //尾迹线条透明度
                curveness: 0.5, //尾迹线条曲直度
              },
            },
            data: allData.moveLines,
          },
        ],
      };
</script>
<template>
    <div class="warehouse">
        <div class="cont1">
            <echarts :text="text4" :option="option4" :china="china" />
        </div>
        <div>
            <echarts :text="text" :option="option" />
        </div>
        <div>
            <echarts :text="text1" :option="option1" />
        </div>
        <div>
            <echarts :text="text2" :option="option2" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.warehouse {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* 设置列和行的尺寸。 */
    grid-template-rows: repeat(3, 32.6%);
    /* 设置列和行的尺寸。 */
    grid-gap: calc(100vw*10/1920);
    height: 100%;
    height: calc(100vh - calc(100vw*45/1920));
    padding: calc(100vw*10/1920);
    box-sizing: border-box;

    >div {
        border: 1px solid red;
        height: 100%;
        width: 100%;

    }

    .cont1 {
        grid-area: 1 / 2 / 4 / 1;
        // grid-row:'3/4';
        // grid-column:'3/4';
    }
}</style>