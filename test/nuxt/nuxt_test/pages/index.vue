<template>
  <section class="container">
    <div id="app">
      <AppLogo></AppLogo>
      <h1 class="title">
        nuxt_test
      </h1>
      <form v-on:submit.prevent>
        <input type="text" v-model="newItem">
        <button v-on:click="addItem">add</button>
      </form>
      <ul>
        <li v-for="(todo, key) in todos" v-bind:key="key">
          {{ todo.item }}
        </li>
      </ul>
      <h2 class="subtitle">
        test projecct
      </h2>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      newItem: '',
      todos: [],
    }
  },
  methods: {
    addItem: function(event) {
      let todo = {
        item: this.newItem,
      }
      this.todos.push(todo)
    },
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
