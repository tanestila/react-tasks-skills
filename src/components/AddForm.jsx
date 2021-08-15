import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function AddForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add todo"
        variant="outlined"
        size="small"
        value={input}
        onChange={handleChange}
      />

      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
}

export default AddForm;
