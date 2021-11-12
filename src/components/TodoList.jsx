import { Box, List } from "@material-ui/core";
import React, { useState } from "react";
import { Item } from "./Item";

function TodoList({ items = [], completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List dense={true}>
        {items.map((todo, index) => (
          <Item
            complete={() => completeTodo(index)}
            data={todo}
            key={todo.id + "" + index}
          />
        ))}
      </List>
    </Box>
  );
}

export default TodoList;
