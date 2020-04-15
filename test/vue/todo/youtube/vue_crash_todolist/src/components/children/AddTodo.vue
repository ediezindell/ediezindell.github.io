<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <label class="star_wrapper">
        <input type="checkbox" name="star" class="star_btn">
      </label>
      <!-- <input type="submit" value="Submit" class="btn"> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false,
      };
      this.$emit('add-todo', newTodo);
      this.title = '';
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
/* input[type="text"]:focus {
  border: solid #00f 1px;
} */
.btn {
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background-color: #777;
}
form {
  margin-bottom: 5px;
}
.star_wrapper {
  display: inline-block;
  content: '★';
  color: #fff;
  text-shadow: #fff;
  width: 100%;
  height: 100%;
}
.star_btn {
  display: none;
}
</style>