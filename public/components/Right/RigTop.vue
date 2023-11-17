<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
const purple = ref(null)
const orgin = ref(null)
const green = ref(null)
const cyan = ref(null)

onMounted(async () => {
    var myChart = echarts.init(purple.value);

    const value = 80;
    const rate = Math.round(value * 100 / 100);
    const option = {
        title: [
            {
                top: 0,
                left: 0,
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 16,
                    color: "#fff",
                },
            },
            {
                text: '{a|' + value + '}{c|%}',
                show: true,
                x: "center",
                y: "35%",
                textStyle: {
                    rich: {
                        a: {
                            fontSize: 15,
                            color: '#ffffff',
                        },
                        c: {
                            fontSize: 15,
                            color: '#ffffff',
                        }
                    },
                },
            },
            {
                x: "center",
                y: "center",
                borderColor: "#fff",
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 20,
                    color: "#fff",
                },
            },
        ],
        polar: {
            center: ["50%", "40%"],
            radius: ["70%", "95%"],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: [
            {
                data: [value],
                name: "",
                type: "bar",
                roundCap: true,
                showBackground: true,
                backgroundStyle: {
                    // 阴影颜色
                    color: "#072334",
                },
                coordinateSystem: "polar",
                itemStyle: {
                    normal: {
                        color: '#9388ff'
                    },
                },
            },
        ],
    }
    myChart.setOption(option);
    ////////////////////////////////////////////////////////////////
    var myChart = echarts.init(orgin.value);

    const value2 = 80;
    const rate2 = Math.round(value * 100 / 100);
    const option2 = {
        title: [
            {
                top: 0,
                left: 0,
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 16,
                    color: "#fff",
                },
            },
            {
                text: '{a|' + value2 + '}{c|%}',
                show: true,
                x: "center",
                y: "35%",
                textStyle: {
                    rich: {
                        a: {
                            fontSize: 15,
                            color: '#ffffff',
                        },
                        c: {
                            fontSize: 15,
                            color: '#ffffff',
                        }
                    },
                },
            },
            {
                x: "center",
                y: "center",
                borderColor: "#fff",
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 20,
                    color: "#fff",
                },
            },
        ],
        polar: {
            center: ["50%", "40%"],
            radius: ["70%", "95%"],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: [
            {
                data: [value],
                name: "",
                type: "bar",
                roundCap: true,
                showBackground: true,
                backgroundStyle: {
                    // 阴影颜色
                    color: "#072334",
                },
                coordinateSystem: "polar",
                itemStyle: {
                    normal: {
                        color: '#ff8921'
                    },
                },
            },
        ],
    }
    myChart.setOption(option2);
    ////////////////////////////////////////////////////////////////
    var myChart = echarts.init(green.value);

    const value3 = 80;
    const rate3 = Math.round(value * 100 / 100);
    const option3 = {
        title: [
            {
                top: 0,
                left: 0,
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 16,
                    color: "#fff",
                },
            },
            {
                text: '{a|' + value3 + '}{c|%}',
                show: true,
                x: "center",
                y: "35%",
                textStyle: {
                    rich: {
                        a: {
                            fontSize: 15,
                            color: '#ffffff',
                        },
                        c: {
                            fontSize: 15,
                            color: '#ffffff',
                        }
                    },
                },
            },
            {
                x: "center",
                y: "center",
                borderColor: "#fff",
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 20,
                    color: "#fff",
                },
            },
        ],
        polar: {
            center: ["50%", "40%"],
            radius: ["70%", "95%"],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: [
            {
                data: [value],
                name: "",
                type: "bar",
                roundCap: true,
                showBackground: true,
                backgroundStyle: {
                    // 阴影颜色
                    color: "#072334",
                },
                coordinateSystem: "polar",
                itemStyle: {
                    normal: {
                        color: '#5cb476'
                    },
                },
            },
        ],
    }
    myChart.setOption(option3);
    ////////////////////////////////////////////////////////////////
    var myChart = echarts.init(cyan.value);

    const value4 = 80;
    const rate4 = Math.round(value * 100 / 100);
    const option4 = {
        title: [
            {
                top: 0,
                left: 0,
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 16,
                    color: "#fff",
                },
            },
            {
                text: '{a|' + value4 + '}{c|%}',
                show: true,
                x: "center",
                y: "35%",
                textStyle: {
                    rich: {
                        a: {
                            fontSize: 15,
                            color: '#ffffff',
                        },
                        c: {
                            fontSize: 15,
                            color: '#ffffff',
                        }
                    },
                },
            },
            {
                x: "center",
                y: "center",
                borderColor: "#fff",
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 20,
                    color: "#fff",
                },
            },
        ],
        polar: {
            center: ["50%", "40%"],
            radius: ["70%", "95%"],
        },
        angleAxis: {
            max: 100,
            show: false,
        },
        radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: [
            {
                data: [value],
                name: "",
                type: "bar",
                roundCap: true,
                showBackground: true,
                backgroundStyle: {
                    // 阴影颜色
                    color: "#072334",
                },
                coordinateSystem: "polar",
                itemStyle: {
                    normal: {
                        color: '#74bddc'
                    },
                },
            },
        ],
    }
    myChart.setOption(option4);
})
</script>
<template>
    <div class="box">
        <p>各状态占比统计</p>
        <div class="RigTop">
            <div class="item purple" ref="purple"></div>
            <div class="item orgin" ref="orgin"></div>
            <div class="item green" ref="green"></div>
            <div class="item cyan" ref="cyan"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.box {
    width: 100%;
    border: 1px solid red;
    height: 32%;

    >p {
        color: #367c92;
        padding: 5px;
    }

    .RigTop {
        display: flex;
        width: 100%;
        height: 100%;

        .item {
            width: 25%;
            height: 100%;
        }
    }
}
</style>