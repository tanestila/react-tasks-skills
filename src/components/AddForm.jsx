import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";

function AddForm({ onSubmit, type, categories = [] }) {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const isTodo = type === "todo";

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isTodo) {
      onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        complete: false,
        category: selectedCategory ?? null,
        cost: 10,
      });
    } else {
      onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
      });
    }

    setInput("");
    setSelectedCategory(null);
  };

  const handleChangeSelect = (e) => {
    // console.log(e);
    setSelectedCategory(e.target.value);
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={1}>
      <Grid item>
        <TextField
          label={`Add ${isTodo ? "todo" : "category"}`}
          variant="outlined"
          size="small"
          value={input}
          onChange={handleChange}
        />
      </Grid>

      {isTodo && (
        <Grid item>
          <TextField
            id="outlined-select-currency"
            select
            variant="outlined"
            label="Select"
            value={selectedCategory}
            onChange={handleChangeSelect}
            size="small"
            style={{ width: "150px" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.text}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      )}
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddForm;
