<template>
  <div id="app">
    <header class="header">
      <h1>TodoList</h1>
    </header>
    <transition-group>
      <div v-bind:key="folder.id" v-for="folder in folders">
        <Folders v-bind:folder="folder" />
      </div>
    </transition-group>
    <!-- <AddFolder /> -->
  </div>
</template>

<script>
// import Header from '@/components/layout/Header.vue';
import Folders from '@/components/home/Folders.vue';
// import AddFolder from '@/components/home/AddFolder.vue';
// import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Folders,
    // Header,
    // AddFolder,
  },
  data() {
    return {
      folders: [],
    }
  },
  methods: {
  },
  created() {
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(res => this.todos = res.data)
    //   .catch(err => console.log(err))
    this.folders = [
      {
        id: 1,
        name: '受信箱',
      },
      {
        id: 2,
        name: '自分に割り当て',
      },
    ];
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
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
</style>
