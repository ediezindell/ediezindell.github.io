<template>
  <div id="contents">
    <header class="header">
      <router-link to="/">Home</router-link>
    </header>
    <div id="todolist">
      <AddTodo v-on:add-todo="addTodo" />
      <Todos v-bind:todos="yetDoneTodos" v-on:del-todo="deleteTodo"/>
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
import axios from 'axios';

export default {
  name: 'Children',
  props: ["id"],
  data () {
    return {
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
      return this.todos.filter(todo => !todo.completed);
    },
    doneTodos: function() {
      return this.todos.filter(todo => todo.completed);
    },
    propMsg: function() {
      return this.showDone ? '非表示にする' : '表示';
    }
  },
  methods: {
    deleteTodo(id) {
      console.log('delete: ' + id);

      axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
          .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      console.log(newTodo);
      const {title, completed} = newTodo;
      axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title,
          completed,
        }
      )
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));
    },
    propDone() {
      this.showDone = !this.showDone;
    }
  },
  created() {
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(res => this.todos = res.data)
    //   .catch(err => console.log(err))
    this.todos = [
      {
        id: 1,
        title: "TODO1",
        completed: false,
      },
      {
        id: 2,
        title: "TODO2",
        completed: true,
      },
      {
        id: 3,
        title: "TODO3",
        completed: false,
      },
      {
        id: 4,
        title: "TODO4",
        completed: true,
      },
      {
        id: 5,
        title: "TODO5",
        completed: false,
      },
      {
        id: 6,
        title: "TODO6",
        completed: true,
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
#contents {
  background-color: #ca2;
}
</style>
