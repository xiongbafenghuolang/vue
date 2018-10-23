<template>
    <div>
        <h3>我是一个新闻</h3>
        <ul>
            <li v-for="(val,index) in news" :key="index">{{val}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'news',
    data(){
        return {
            news:['1111','22222','333333','4444444']
        }
    }
}
</script>
