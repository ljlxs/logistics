<script setup>
import { reactive } from 'vue';
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const orders=reactive([
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'已揽件'
    },
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'待领取'
    },
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'运送中'
    },
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'配送中'
    },
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'待签收'
    },
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'运送中'
    },
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'配送中'
    },
    {
        from:'西安',
        to:'上海',
        date:new Date().toLocaleString(),
        statusL:'待签收'
    }
])
</script>
<template>
    <div class="Cont">
        <p>实时订单</p>
        <div class="list">
            <div class="th">
                <div class="tr">下单位置</div>
                <div class="tr">接收位置</div>
                <div class="tr">下单时间</div>
                <div class="tr">状态</div>
            </div>
            <vue3-seamless-scroll :list="orders" class="scroll">
                <div class="item" v-for="(item, index) in orders" :key="index">
                    <span>{{ item.from }}</span>
                    <span>{{ item.to }}</span>
                    <span class="trimes">{{ item.date }}</span>
                    <span>{{ item.statusL }}</span>
                </div>
            </vue3-seamless-scroll>
        </div>
    </div>
</template>
<style scoped lang="scss">
.Cont {
    width: 100%;
    height: 32%;
    border: 1px solid red;
    margin: 5px 0;
    padding: 10px;
    box-sizing: border-box;
    >p {
        color: #519aa4;
    }
    .list{
        margin-top: 10px;
        padding-top: 5px;
        height: calc(100% - 38px);
        .th{
            display: flex;
            width: 100%;
            background: #2aa7ed;
            color: white;
            border-radius: 2px;
            justify-content: space-evenly;
            .tr{
                text-align: center;
            }
        }
        .scroll{
            height: 100%;
            overflow: hidden;
        }
        .item{
            color: white;
            display: flex;
            justify-content: space-evenly;
            padding: 10px 0;
            height: 100%;
            .trimes{
            }
            >span{
                text-align: center;
            }
            
        }
    }
}
</style>