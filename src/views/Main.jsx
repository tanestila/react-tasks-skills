import { Grid } from "@material-ui/core";

import { Chart } from "../components/RadarChart";
import TodoList from "../components/TodoList";

export default function Main() {
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
      <div>
        <Chart />
      </div>
    </Grid>
  );
}
