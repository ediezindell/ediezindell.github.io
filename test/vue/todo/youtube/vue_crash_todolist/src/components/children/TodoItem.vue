<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <label>
      <input type="checkbox" v-model="todo.completed">
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id); showLoading(todo.id);" class="del">
        <i class="fa fa-trash"></i>
      </button>
    </label>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    showLoading(id) {
      console.log(id);
    },
  }
}
</script>

<style scoped>
@import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';

.todo-item {
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px #ccc dotted;
  user-select: none;
}
.todo-item,
.todo-item label {
  cursor: pointer;
  display: block;
}

.is-complete {
  text-decoration: line-through;
  background-color: #ddd;
}
.del {
  border: none;
  padding: 5px 9px;
  cursor: pointer;
  float: right;
  border: 1px #ccc dotted;
  background-color: #fff;
}

</style>