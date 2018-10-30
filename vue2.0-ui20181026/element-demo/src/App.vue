<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Button></Button>
    <div>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </div>
    <div>
      <Date></Date>
    </div>
    <el-button type="success"  @click="show=!show" >点击显示</el-button>
    <div>
      <transition name="fade" >
        <div v-show="show" class="box"></div>
      </transition>
        <div>
          <transition-group enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutRight" >
              <p v-show="show" class="box animated" :key="1" ></p>
              <p v-show="show" class="box animated" :key="2" ></p>
          </transition-group>
        </div>
    </div>
    <div>
        <Home></Home>
        <News></News>
    </div>
  </div>
</template>

<script>
import Button from './components/Button'
import Date from './components/Date'
import Home from './components/Home'
import News from './components/News'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:false
    }
  },
  components:{
    Button,
    Date,
    Home,
    News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.box {
  width:300px;
  height:300px;
  background: red;
}

 .fade-enter-active,.fade-leave-active{
    transition: 1s all ease;
}

.fade-enter-active {
    opacity: 1;
    width: 300px;
    height: 300px;
}

.fade-enter{
    opacity: 0;
    width: 100px;
    height: 100px;
}

.fade-leave-active {
    opacity: 0;
    width: 100px;
    height: 100px;
}
</style>
