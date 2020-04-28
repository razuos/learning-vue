<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="msg" name="msg" placeholder="Add a message...">
      <button class="btn" type="submit"><b-icon icon="check"></b-icon></button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "AddTodo",
  data() {
    return {
      msg: ""
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const Todo = {
        id: uuidv4(),
        msg: this.msg,
        done: false
      }
      this.$emit('add-todo', Todo)
      this.msg = "";
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

  .btn {
    flex: 2;
    float: right;
    background: gray;
  }

</style>