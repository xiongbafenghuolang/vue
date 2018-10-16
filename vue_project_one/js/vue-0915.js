
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        message1:'页面加载于 ' + new Date().toLocaleString()
    }
});

app.message = "wuxiong how are you";

var app3 = new Vue({
    el:"#app-3",
    data:{
        seen:true
    }
})

var app4 = new Vue ({
    el:"#app-4",
    data:{
        todos:[
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})

app4.todos.push({text:"学习微信小程序"});
app4.todos.push({text:"学习web开发"});
app4.todos.pop();
app4.todos.unshift({text:"今天天气真好！"});
app4.todos.unshift({text:"今天心情还不错额"});
app4.todos.shift();


var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"Hello Vue.js"
    },
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
})


var app6 = new Vue({
    el:"#app-6",
    data:{
        message:'15893456782',
        id:"myId"
    }
})


// app6.id = "1111";

Vue.component('todo-item',{
    // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义特性。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  })


  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },
      otherMessage:function() {
          return this.message + " wuxiong"
      }
    }
  })

  vm.message = 'Goodbye';
  console.log(vm.reversedMessage);

  var demo = new Vue({
      el:"#demo",
      data:{
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      },
      watch: {
        firstName: function(val) {
            this.firstName = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' +val
        }
      }
  })


  var demo2 = new Vue({
      el:"#demo2",
      data: {
        isActive: true,
        hasError: false
      }
  })

//   对象语法
//   var demo3 = new Vue({
//     el:"#demo3",
//     data:{
//         classObject: {
//             active: true,
//             'text-danger': false
//         }
//     }
//   })

  var demo3 = new Vue({
    el:"#demo3",
    data: {
        isActive: true,
        error: null
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
  })

// 数组语法
  var demo4 = new Vue({
    el:"#demo4",
    data: {
        isActive:true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
  })

  var demo5 = new Vue({
    el:"#demo5",
      data: {
        activeColor:"grey",
        fontSize:'18px',
        styleObject: {
            color:'red',
            fontSize:'15px'
        }
      }
  })

  var demo6 = new Vue({
      el:"#demo6",
      data: {
        isActive: true,
        error: null
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
  })

  var demo7 = new Vue({
      el:"#demo7",
      data:{
        baseStyles:"baseStyles",
        overridingStyles:"overridingStyles"
      }
  })

  var example1 = new Vue({
      el:"#example-1",
      data:{
        language: [
              {message: 'html'},
              {message: 'css'},
              {message: 'js'}
          ]
      }
  })

  var example2 = new Vue({
    el: '#example-2',
    data: {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })

  var object = new Vue({
    el: '#v-for-object',
    data: {
      obj: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  })

  Vue.component('todo-item',{
    template:'\
    <li>\
      {{title}}\
      <button v-on:click="$emit(\'remove\')" >Remove</button>\
    </li>\
    ',
    props: ['title']
  })

  new Vue({
    el:'#todo-list-example',
    data: {
      newTodoText:'',
      todos:[
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function(){
        this.todos.push({
          id:this.nextTodoId++,
          title:this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })