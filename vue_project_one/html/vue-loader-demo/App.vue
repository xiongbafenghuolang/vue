<template>
    <div id="app">
        <h3>vue-loader+vue-router</h3>
        <div>
            <a v-link="{path:'/home'}" >主页</a>
            <a v-link="{path:'.news'}" >新闻</a>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Menu form './components/Menu.vue';

    export  default{
        data(){
            return {
                msg:'welcome Vue'
            }
        },
        methods:{
            change(){
                this.msg='wahaha'
            }
        },
        components:{
            'my-menu':Menu
        }
    }
</script>

<style>

</style>