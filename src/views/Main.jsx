import { Box, Divider, Grid, ListItemIcon } from "@material-ui/core";
import { useRecoilState } from "recoil";
import AddForm from "../components/AddForm";
import { Chart } from "../components/RadarChart";
import TodoList from "../components/TodoList";
import { todoListState } from "../state";

export default function Main() {
  const [todos, setTodos] = useRecoilState(todoListState);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    console.log(todo);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    // newTodos[index].complete = !newTodos[index].complete;
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <div>
        <AddForm onSubmit={addTodo} />
        <TodoList items={todos} completeTodo={completeTodo} />
      </div>
      <div>
        <Chart />
      </div>
    </Grid>
  );
}
