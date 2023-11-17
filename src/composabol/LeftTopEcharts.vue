<script setup>
import { reactive } from 'vue';

const today=reactive({
    in:'170873',
    end:'487752',
    run:'685798'
})
</script>
<template>
    <div class="top">
        <p>今日概览</p>
        <div class="list">
            <p>接单数:</p>
            <div class="item orange" v-for="(item,index) in today.in" :key="index">
                {{ item }}
            </div>
        </div>
        <div class="list">
            <p>完成数:</p>
            <div class="item green" v-for="(item,index) in today.end" :key="index">
                {{ item }}
            </div>
        </div>
        <div class="list">
            <p>运算中:</p>
            <div class="item red" v-for="(item,index) in today.run" :key="index">
                {{ item }}
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.top{
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    >p{
        color: #519aa4;
    }
    .list{
        color: white;
        display: flex;
        align-items: center;
        margin-top: 10px;
        >p{
            margin: 0 15px;
        }
        .item{
            font-size: 20px;
            padding: 10px;
            background: #1f2120;
            margin: 10px;
        }
        .orange{
            color: #d77629;
        }
        .green{
            color: #66b658;
        }
        .red{
            color: #b95151;
        }
    }
}
</style>