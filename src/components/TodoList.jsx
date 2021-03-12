import React, { useState } from 'react';
import TodoFrom from "./TodoForm"
import Todo from "./Todo"

function TodoList(props) {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text))
      return
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const completeTodo = (todo) => {

  }

  return (
    <div>
      <TodoFrom
        onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default TodoList;