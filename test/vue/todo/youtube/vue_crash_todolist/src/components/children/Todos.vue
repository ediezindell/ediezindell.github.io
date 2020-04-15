<template>
  <div>
    <transition-group>
      <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem class="todoitem" v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from '@/components/children/TodoItem.vue';
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"],
}
</script>

<style>
.is-complete {
  text-decoration: line-through;
  background-color: #ddd;
}
</style>
<style scoped>
/* 表示・非表示アニメーション中 */
.v-enter-active, .v-leave-active {
  transition: all 500ms;
}

/* 表示アニメーション開始時 ・ 非表示アニメーション後 */
.v-enter, .v-leave-to {
  opacity: 0;
}

/* 要素が移動する時に700msで移動するように指定 */
.v-move {
  transition: all 700ms;
}

.v-leave-active {
  /* 移動のトランジションをさせる場合は非表示アニメーション中に position: absoluteを指定しないと正しく動作しない */
  position: absolute;
}
.v-leave-active > * {
  display: none;
}

.todoitem {
  margin-bottom: 2px;
}
</style>