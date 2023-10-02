<script setup>
import { ref } from 'vue'
import Top from './components/Left/Top.vue';
import Cont from './components/Left/Cont.vue';
import Bomt from './components/Left/Bomt.vue';
import ConTent from './components/Cont/ConTent.vue';
import BomTed from './components/Cont/BomTed.vue';
import RigTop from './components/Right/RigTop.vue';
import RigCont from './components/Right/RigCont.vue';
import RigBomt from './components/Right/RigBomt.vue';
const actId = ref(0)
const itemList = ref([
  {
    path: '',
    name: '综合监控',
    id: 0
  },
  {
    path: '',
    name: '实时物流',
    id: 1
  },
  {
    path: '',
    name: '订单监控',
    id: 2
  },
  {
    path: '',
    name: '配送监控',
    id: 3
  },
  {
    path: '',
    name: '投诉监控',
    id: 4
  },
  {
    path: '',
    name: '员工监控',
    id: 5
  },
  {
    path: '',
    name: '仓储监控',
    id: 6
  },
  {
    path: '',
    name: '网点监控',
    id: 7
  }
])
</script>
<template>
  <div class="labout">
    <div class="header">
      <p>智慧物流监控大屏</p>
      <div class="tabs-li">
        <div v-for="(item, index) in itemList" :key="index" class="item" :class="{ active: actId == index }"
          @click="actId = index">{{ item.name }}</div>
      </div>
    </div>
    <div class="echars">
      <div class="left">
        <Top/>
        <Cont/>
        <Bomt/>
      </div>
      <div class="cont">
        <ConTent/>
        <BomTed/>
      </div>
      <div class="right">
        <RigTop/>
        <RigCont/>
        <RigBomt/>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 45px;
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
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  box-sizing: border-box;
  .echars{
    display: flex;
    .left{
      width: 25%;
      height: calc(100vh - 50px);
      display: flex;
      flex-direction: column;
      padding: 5px;
    }
    .cont{
      width: 50%;
      height: calc(100vh - 50px);
      padding: 5px 0;
    }
    .right{
      width: 25%;
      height: calc(100vh - 50px);
      display: flex;
      flex-direction: column;
      padding: 5px;
    }
  }
}</style>
