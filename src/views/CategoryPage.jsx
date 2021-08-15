import { useRecoilState } from "recoil";
import { todoListState } from "../state";
import AddForm from "../components/AddForm";
import CategoryList from "../components/CategoryList";
import { Grid } from "@material-ui/core";

export default function CategoryPage() {
  const [todos, setTodos] = useRecoilState(todoListState);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (todo) => {};

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <div>
        <AddForm onSubmit={addTodo} />
        <CategoryList items={todos} completeTodo={completeTodo} />
      </div>
    </Grid>
  );
}
