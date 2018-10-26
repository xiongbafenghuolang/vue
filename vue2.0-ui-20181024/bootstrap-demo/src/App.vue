<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <button class="btn btn-default" >普通的按钮</button>
    <button class="btn btn-danger" >普通的按钮</button>
    <div class="container-fluid">
      <div class="row">
      <div class="col-sm-8 my-border">
        <div class="column left-main">
          <div class="row-sm-4">11</div>
          <div class="row-sm-5">22</div>
        </div>
      </div>
      <div class="row col-sm-4 my-border">
        <div class="col-sm-4" >aaa</div>
        <div class="col-sm-4" >bbb</div>
        <div class="col-sm-8" >ccc</div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>

</script>

<style scoped >
  div {margin: 0;padding: 0}
  .my-border {
    border: 1px solid #ddeded;
  }

  .left-main {
    height: 500px;
  }
</style>
