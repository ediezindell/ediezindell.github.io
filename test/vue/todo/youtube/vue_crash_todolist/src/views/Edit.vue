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
    <div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Edit',
  props: ["id"],
  data () {
    return {
      title: '',
    }
  },
  components: {
  },
  methods: {
  },
  created() {
    this.title = '買い物リスト(日用品、食料品)'
  },
}
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
