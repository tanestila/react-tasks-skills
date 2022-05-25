import React from "react";
import { Box, List } from "@material-ui/core";
import { Item } from "./Item";
import { useRecoilState } from "recoil";
import { categoryListState } from "../state";
import AddForm from "./AddForm";

function CategoryList() {
  const [categories, setCategories] = useRecoilState(categoryListState);

  const addCategory = (category) => {
    if (!category.text || /^\s*$/.test(category.text)) return;
    const newCategories = [category, ...categories];
    setCategories(newCategories);
  };

  const deleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  return (
    <>
      <AddForm onSubmit={addCategory} />
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <List dense={true}>
          {categories.map((category, index) => (
            <Item
              data={category}
              key={category.id + "" + index}
              type="category"
              deleteTodo={deleteCategory}
            />
          ))}
        </List>
      </Box>
    </>
  );
}

export default CategoryList;
