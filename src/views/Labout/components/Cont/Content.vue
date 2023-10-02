<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
const main = ref(null)

onMounted(async () => {
  // var myChart = echarts.init(main.value);
  // myChart.setOption(option);
})

</script>
<template>
  <div class="Content" ref="main"></div>
</template>
<style scoped lang="scss">
.Content {
  width: 100%;
  flex: 1;
  border: 1px solid red;
  height: 64.8%;
  margin-bottom: 5px;
  box-sizing: border-box;
}
</style>