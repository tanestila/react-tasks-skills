import CategoryList from "../components/CategoryList";
import { Grid } from "@material-ui/core";

export default function CategoryPage() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <div>
        <CategoryList />
      </div>
    </Grid>
  );
}
