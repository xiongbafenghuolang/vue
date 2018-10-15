
var example1 = new Vue({
    el:'#example-1',
    data: {
        counter:0
    }
})


var example2 = new Vue({
    el:'#example-2',
    data: {
        name:'Vue.js'
    },
     // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

// 也可以用 JavaScript 直接调用方法
// example2.greet() // => 'Hello Vue.js!'

new Vue({
    el:'#example-3',
    methods: {
        say: function(message) {
            alert(message)
        }
    }
})

new Vue({
    el:'#example-4',
    methods: {
        warn: function(message,event) {
            if(event) event.preventDefault()
            alert(message)
        }
    }
})

var example5 = new Vue({
    el:"#example-5",
    data: {
        message:"what are you doing?"
    }
})

var example6 = new Vue({
    el:"#example-6",
    data: {
        checked:false
    }
})


var example7 = new Vue({
    el:"#example-7",
    data: {
        checkedNames: []
    }
})

var example8 = new Vue({
    el:"#example-8",
    data: {
        picked :'Two'
    }
})


var example9 = new Vue({
    el:"#example-9",
    data: {
        selected:''
    }
})


Vue.component('button-counter',{
    data: function() {
        return {
            count:0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' })