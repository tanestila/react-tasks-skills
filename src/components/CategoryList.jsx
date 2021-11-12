import React from "react";
import { Box, List } from "@material-ui/core";
import { Item } from "./Item";

function CategoryList({ items = [], completecategory }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List dense={true}>
        {items.map((category, index) => (
          <Item
            complete={completecategory}
            data={category}
            key={category.id + "" + index}
          />
        ))}
      </List>
    </Box>
  );
}

export default CategoryList;
