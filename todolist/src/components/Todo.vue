<template>
  <div class="todo-item" v-bind:class="{'done':todo.done}">
    <p>
      <input type="checkbox" v-on:change="markDone">
      {{todo.msg}}
      <b-button v-on:click="$emit('del-todo', todo.id)" class="btn-del" variant="danger">X</b-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: ["todo"],
  methods: {
    markDone() {
      this.todo.done = !this.todo.done;
    }
  }
}
</script>

<style scoped>
  .todo-item {
    padding: 1rem
  }

  .done {
    text-decoration: line-through;
  }

  .btn-del {
    float:right
  }
</style>