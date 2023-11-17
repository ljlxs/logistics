<script setup>
import { ref,onMounted, reactive } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import {
  LeftTopEcharts, LeftBomtEcharts, LeftContEcharts,
  RightTopEcharts, RightBotEcharts, RightContEcharts,
  ContContEcharts, ContBomtEcharts,ContBomtLeftEcharts
} from '@/composabol/index.js'
const router = useRouter()
const route = useRoute()
const itemList = ref([
  {
    path: '/',
    name: '综合监控',
    id: 0
  },
  {
    path: '/RealTime',
    name: '实时物流',
    id: 1
  },
  {
    path: '/MoniToring',
    name: '订单监控',
    id: 2
  },
  {
    path: '/DistriBution',
    name: '配送监控',
    id: 3
  },
  {
    path: '/ComPlaint',
    name: '投诉监控',
    id: 4
  },
  {
    path: '/EmploYee',
    name: '员工监控',
    id: 5
  },
  {
    path: '/WareHouse',
    name: '仓储监控',
    id: 6
  },
  {
    path: '/LatticePoint',
    name: '网点监控',
    id: 7
  }
])
const list = ref([
  {
    row:'1/1',
    com:'1/2',
    name:LeftTopEcharts,
  },
  {
    row:'2/3',
    com:'1/2',
    name:LeftContEcharts,
  },
   {
    row:'3/4',
    com:'1/2',
    name:LeftBomtEcharts,
  },
   {
    row:'1/3',
    com:'2/4',
    name:ContContEcharts,
  },
  {
    row:'3/4',
    com:'2/3',
    name:ContBomtLeftEcharts,
  },
   {
    row:'3/4',
    com:'3/4',
    name:ContBomtEcharts,
  },
   {
    row:'1/2',
    com:'4/5',
    name:RightTopEcharts,
  },
  {
    row:'2/3',
    com:'4/5',
    name:RightContEcharts,
  },
  {
    row:'3/4',
    com:'4/5',
    name:RightBotEcharts,
  }

])

const skip = (row) => {
  router.push(row.path)
}
</script>
<template>
  <div class="labout">
    <div class="header">
      <p>智慧物流监控大屏</p>
      <div class="tabs-li">
        <div v-for="(item, index) in itemList" :key="index" class="item" :class="{ active: route.path == item.path }"
          @click="skip(item)">{{ item.name }}</div>
      </div>
    </div>
    <div>
      <div class="echars" v-if="route.path === '/'">
       <div class="echars_item"  v-for="item in list" :style="{gridRow:item.row,gridColumn:item.com}">
            <component :is="item.name"></component>
        </div>
      </div>
      <RouterView />
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  width: 100%;
  height: calc(100vw*45/1920);
  border-bottom: 1px solid #59b8bd;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  >p {
    font-size: 20px;
    color: aqua;
    margin: 0 10px;
  }

  .tabs-li {
    display: flex;

    .active {
      background: #07a4bd !important;
    }

    .item {
      color: #e6e6e6;
      width: 70px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      background: #4b4d4b;
      border-radius: 3px;
      text-align: center;
      margin: 5px;
    }
  }
}

.labout {
  height: 100vh;
   background: #000;
}
.echars{
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;/* 设置列和行的尺寸。 */
    grid-template-rows: repeat(3,32.6%);/* 设置列和行的尺寸。 */
    grid-gap: calc(100vw*10/1920);
    height: 100%;
    height:calc(100vh - calc(100vw*45/1920));
    padding: calc(100vw*10/1920);
    box-sizing: border-box;
    &_item{
         border: 1px solid red;
         height: 100%;
         width: 100%;
    }
  }
</style>
