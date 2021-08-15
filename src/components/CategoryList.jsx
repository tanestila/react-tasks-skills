import React, { useState } from "react";

function CategoryList({ items = [], completecategory }) {
  return items.map((category, index) => (
    <div
      className={category.isComplete ? "category-row complete" : "category-row"}
      key={index}
    >
      <div key={category.id} onClick={() => completecategory(category.id)}>
        {category.text}
      </div>
      <div>X</div>
      <div>Edit</div>
    </div>
  ));
}

export default CategoryList;
