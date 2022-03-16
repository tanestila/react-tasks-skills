import {
  Box,
  Button,
  IconButton,
  Input,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemSecondaryAction, ListItemButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Item = ({
  complete,
  deleteTodo,
  data,
  editTodo,
  type,
  category,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(data.text);
  const isTodo = type === "todo";

  const onClickEdit = () => {
    setOpen((open) => !open);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    editTodo({ ...data, text: inputValue });
    setOpen(false);
  };

  return (
    <>
      <ListItem>
        <ListItemButton onClick={complete}>
          {data.complete ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          <ListItemText primary={data.text} secondary={category ?? ""} />
        </ListItemButton>
        <ListItemSecondaryAction>
          {isTodo && (
            <IconButton edge="start" aria-label="delete" onClick={onClickEdit}>
              <EditIcon />
            </IconButton>
          )}
          <IconButton edge="end" aria-label="delete" onClick={deleteTodo}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input value={inputValue} onChange={onChangeInput} />
          <Button onClick={onSave}>Save</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Box>
      </Modal>
    </>
  );
};
