import { IconButton, ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemSecondaryAction, ListItemButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const Item = ({ complete, data }) => {
  return (
    <ListItem>
      <ListItemButton onClick={complete}>
        {data.complete ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        <ListItemText primary={data.text} />
      </ListItemButton>
      <ListItemSecondaryAction>
        <IconButton edge="start" aria-label="delete">
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
