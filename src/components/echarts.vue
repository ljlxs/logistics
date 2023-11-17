<script setup>
import { ref, onMounted } from 'vue'
import 'echarts/extension/bmap/bmap';
const props = defineProps({
    text: {
        type: String,
        default: () => [],
    },
    option: {
        type: Object,
        default: () => [],
    },
    china: {
        type: Object,
        default: () => [],
    }
})
import * as echarts from 'echarts';
const bar = ref(null)
onMounted(() => {
    echarts.registerMap('china', { geoJSON: props.china })
    const myChart = echarts.init(bar.value)
    myChart.setOption(props.option);
})
</script>
<template>
    <div class="echarts">
        <p>{{ props.text }}</p>
        <div ref="bar"></div>
    </div>
</template>


<style scoped lang='scss'>
.echarts {
    width: 100%;
    margin: 5px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    >p {
        padding: 5px;
        color: #1b5c75;
    }

    >div {
        width: 100%;
        flex: 1;
    }
}
</style>
