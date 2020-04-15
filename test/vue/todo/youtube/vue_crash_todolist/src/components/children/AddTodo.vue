<template>
  <div>
    <form @submit="addTodo">
      <label for="addTodoForm" class="left-item">
        <span class="plus">+</span>
      </label>
      <input type="text" v-model="title" id="addTodoForm" class="center-item" name="title" placeholder="Add Todo...">
      <span class="right-item">
        <label class="star_wrapper" v-bind:class="{'star_checked':star}">
          <i class="fa fa-star-o"></i>
          <input type="checkbox" v-model="star" class="star_btn">
        </label>
      </span>
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
      star: false,
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if(this.title) {
        const newTodo = {
          title: this.title,
          completed: false,
        };
        this.$emit('add-todo', newTodo);
      }
      this.title = '';
    }
  }
}
</script>

<style>
.left-item,
.right-item,
.center-item {
  vertical-align: middle;
  display: inline-block;
  width: 10%;
  line-height: 100%;
  /* height: 100%; */
}
.left-item,
.right-item {
  text-align: center;
  width: 10%;
}
.center-item {
  width: 80%;
}
</style>
<style scoped>
form {
  height: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 5px;
}
.plus {
  background-color: rgba(0, 0, 0, 0);
  font-size: 150%;
  height: 100%;
}
#addTodoForm {
  padding-left: 10px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  height: 100%;
}
.star_wrapper:before {
  content: '★';
}
.star_wrapper {
  color: #fff;
  height: 40px;
  padding: auto;
  vertical-align: middle;
}
.star_btn {
  display: none;
}
.star_checked {
  color: #f88;
  /* color: #fff; */
  /* background-color: #f7c; */
}
/* .btn {
  flex: 2;
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background-color: #777;
} */
</style>