<template>
  <div id="contents">
    <header class="header">
      <router-link to="/" id="backBtn">&lt;</router-link>
      <span id="folder_title">
        {{this.title}}
      </span>
      <button id="editBtn">
        編集
      </button>
    </header>
    <div id="todolist">
      <AddTodo v-on:add-todo="addTodo" />
      <Todos v-bind:todos="yetDoneTodos" v-on:del-todo="deleteTodo" v-on:update-todo-order="updateTodoOrder" />
      <div class="btn_wrapper">
        <button id="propBtn" @click="propDone">完了したTODOを{{propMsg}}</button>
      </div>
      <DoneTodos v-if="showDone" v-bind:todos="doneTodos" v-on:del-todo="deleteTodo"/>
    </div>
  </div>
</template>

<script>
import Todos from '@/components/children/Todos.vue';
import DoneTodos from '@/components/children/Todos.vue';
import AddTodo from '@/components/children/AddTodo.vue';
// import axios from 'axios';

export default {
  name: 'Children',
  props: ["id"],
  data () {
    return {
      title: '',
      todos: [],
      showDone: false,
    }
  },
  components: {
    Todos,
    DoneTodos,
    AddTodo,
  },
  computed: {
    yetDoneTodos: function() {
      return this.todos.filter(todo => !todo.completed).sort(
        function(a, b) {
          let r = 0;
          if( a.order_by < b.order_by ){
            r = -1;
          }else if( a.order_by > b.order_by ){
            r = 1;
          }
          return r; // 昇順
        }
      );
    },
    doneTodos: function() {
      return this.todos.filter(todo => todo.completed).sort(        function(a, b) {
          let r = 0;
          if( a.updated_at < b.updated_at ){
            r = -1;
          }else if( a.updated_at > b.updated_at ){
            r = 1;
          }
          return -1 * r; // 降順
        }
      );
    },
    propMsg: function() {
      return this.showDone ? '非表示にする' : '表示';
    }
  },
  methods: {
    updateTodoOrder() {
      // let todos = this.todos.map(function(item, index) {
      //   let ret = item;
      //   ret.order_by = index;
      //   return ret;
      // })
      // this.todos = todos;
      // this.todos.map(function(item, index) {
      //   console.log({
      //     title: item.title,
      //     index: index,
      //     order: item.order_by
      //   });
      // });
    },
    deleteTodo(id) {
      console.log('delete: ' + id);

      // axios.delete(
      //   `https://jsonplaceholder.typicode.com/todos/${id}`)
      //     .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      //     .catch(err => console.log(err));
      this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      console.log(newTodo);
      // const {title, completed} = newTodo;
      // axios.post(
      //   'https://jsonplaceholder.typicode.com/todos',
      //   {
      //     title,
      //     completed,
      //   }
      // )
      //   .then(res => this.todos = [...this.todos, res.data])
      //   .catch(err => console.log(err));
    },
    propDone() {
      this.showDone = !this.showDone;
    }
  },
  created() {
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(res => this.todos = res.data)
    //   .catch(err => console.log(err))
    this.title = '買い物リスト(日用品、食料品)'
    this.todos = [
      {
        id: 1,
        title: "TODO1",
        completed: true,
        order_by: 1,
        updated_at: new Date().getTime() + 10,
      },
      {
        id: 2,
        title: "TODO2",
        completed: true,
        order_by: 3,
        updated_at: new Date().getTime() + 4,
      },
      {
        id: 3,
        title: "TODO3",
        completed: true,
        order_by: 2,
        updated_at: new Date().getTime() + 120,
      },
      {
        id: 4,
        title: "TODO4",
        completed: true,
        order_by: 4,
        updated_at: new Date().getTime() + 11,
      },
      {
        id: 5,
        title: "TODO5",
        completed: false,
        order_by: 6,
        updated_at: new Date().getTime() + 1,
      },
      {
        id: 6,
        title: "TODO6",
        completed: true,
        order_by: 5,
        updated_at: new Date().getTime(),
      },
    ];
  },
}

// console.log(todos);
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
.btn_wrapper {
  margin: 1em 0;
  text-align: center;
}
#propBtn {
  background-color: rgba(168, 192, 255, 0.4);
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 70%;
  font-weight: bold;
  padding: .5em 2em;
  cursor: pointer;
}
#todolist {
  padding: 8px;
}
header {
  width: 100%;
}
#backBtn {
  float: left;
}
#editBtn {
  float: right;
  color: white;
  font-size: 80%;
}
</style>
