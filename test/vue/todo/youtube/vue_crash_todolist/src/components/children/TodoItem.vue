<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <label @click="updateTodo(todo)" class="left-item">
      <input type="checkbox" v-model="todo.completed">
    </label>
    <router-link id="editLink" class="center-item" tag="span" :to="{name: 'Edit', params: {id: 1}}" replace>
        {{todo.title}}
    </router-link>
    <span class="right-item">
      <button v-confirm="deleteDialog(todo.id, todo.title)" class="del">
        <i class="fa fa-trash"></i>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    deleteDialog(id, title) {
      let self = this;
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
.todo-item {
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  user-select: none;
  border-radius: 5px;
  cursor: pointer;
}

.is-complete {
  background-color: rgba(255, 255, 255, 0.5);
}
.is-complete span {
  text-decoration: line-through;
}
.del {
  padding: 5px;
  cursor: pointer;
  border: 1px #ccc dotted;
  background-color: rgba(0, 0, 0, 0);
}
#editLink {
  padding: 10px 0;
}
</style>
<style>
.sortable-ghost > .todo-item {
  visibility: hidden;
}
</style>