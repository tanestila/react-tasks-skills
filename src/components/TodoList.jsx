import { Box, List, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  categoryListState,
  filteredTodoListState,
  todoListFilterState,
  todoListState,
} from "../state";
import AddForm from "./AddForm";
import { Item } from "./Item";

function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [categories, s] = useRecoilState(categoryListState);
  const todoList = useRecoilValue(filteredTodoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      complete: !newTodos[index].complete,
    };
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, todo) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      ...todo,
    };
    setTodos(newTodos);
  };

  const onSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <AddForm onSubmit={addTodo} type="todo" categories={categories} />
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={filter}
        onChange={onSelectChange}
        label="Age"
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Show Completed">Show Completed</MenuItem>
        <MenuItem value="Show Uncompleted">Show Uncompleted</MenuItem>
      </Select>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <List dense={true}>
          {todoList.map((todo, index) => (
            <Item
              complete={() => completeTodo(index)}
              deleteTodo={() => deleteTodo(index)}
              data={todo}
              key={todo.id + "" + index}
              editTodo={(todo) => editTodo(index, todo)}
              type="todo"
              category={
                categories.find((item) => item.id === todo.category)?.text ??
                undefined
              }
            />
          ))}
        </List>
      </Box>
    </>
  );
}

export default TodoList;
