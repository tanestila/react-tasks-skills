import { Grid } from "@material-ui/core";

import TodoList from "../components/TodoList";

export default function TodoPage() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <div>
        <TodoList />
      </div>
    </Grid>
  );
}
