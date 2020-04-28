<template>
  <div id="app">
    <Header />
    <AddTodo @add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="delTodo"/>
  </div>
</template>

<script>
import Todos from '../components/Todos';
import Header from '../components/layout/Header';
import AddTodo from '../components/AddTodo';

export default {
  name: 'Home',
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          msg: "Todo #1",
          done: false
        },
        {
          id: 2,
          msg: "Todo #2",
          done: true
        },
        {
          id: 3,
          msg: "Todo #3",
          done: false
        }
      ]
    }
  },
  methods: {
    delTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(todo) {
      this.todos = [...this.todos, todo];
    }
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
</style>
