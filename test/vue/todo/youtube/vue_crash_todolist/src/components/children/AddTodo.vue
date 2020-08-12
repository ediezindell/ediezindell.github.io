<template>
  <div>
    <form @submit="addTodo">
      <label for="addTodoForm" class="left-item">
        <span class="plus">+</span>
      </label>
      <input type="text" v-model="title" id="addTodoForm" class="center-item" name="title" placeholder="ToDo を追加…">
      <span class="right-item">
        <label class="star_wrapper">
          <input type="checkbox" v-model="star" class="star_btn">
            <i v-if="star" class="fa fa-star"></i>
            <i v-else class="fa fa-star-o"></i>
        </label>
      </span>
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
  padding: auto;
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
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 120%;
  height: 100%;
}
#addTodoForm {
  /* padding-left: 10px; */
  background-color: rgba(0, 0, 0, 0);
  border: none;
  height: 100%;
  font-size: 100%;
  color: rgba(255, 255, 255, 0.8)
}
#addTodoForm::placeholder {
  color: rgba(255, 255, 255, 0.8)
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