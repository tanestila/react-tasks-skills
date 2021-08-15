import React, { useState } from "react";
import { Item } from "./Item";

function TodoList({ items = [], completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return items.map((todo, index) => (
    <Item complete={completeTodo} data={todo} key={todo.id + "" + index} />
  ));
}

export default TodoList;
