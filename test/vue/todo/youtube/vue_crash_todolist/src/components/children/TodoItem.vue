<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <label @click="updateTodo(todo)">
      <span class="left-item">
        <input type="checkbox" v-model="todo.completed">
      </span>
      <span class="center-item">{{todo.title}}</span>
      <span class="right-item">
        <button v-confirm="deleteDialog(todo.id, todo.title)" class="del">
          <i class="fa fa-trash"></i>
        </button>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    deleteDialog(id, title) {
      let self = this;
      console.log('?');
      return {
        loader: true,
        html: true,
        ok: function(dialog) {
          console.log('delete');
          setTimeout(function() {
            self.$emit('del-todo', id);
            console.log('deleted: ' + id);
            dialog.close();
          }, 100);
        },
        cancel: function(dialog) {
          console.log('cancel');
          dialog.close();
        },
        message: {
          title: '削除',
          body: '「' + title + '」を削除しますか？',
        }
      }
    },
    updateTodo(todo) {
      todo.updated_at = new Date().getTime();
    }
  },
}
</script>

<style scoped>
@import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';

.todo-item {
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  border-bottom: 1px #ccc dotted;
  user-select: none;
  border-radius: 5px;
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
  padding: 5px;
  cursor: pointer;
  border: 1px #ccc dotted;
  background-color: #fff;
}

</style>