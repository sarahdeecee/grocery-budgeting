import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { useState } from "react";
import Item from "./Item";

function ItemList() {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const items = [0,1,2,3];

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="edit">
                <Edit />
              </IconButton>
            }
            disablePadding
          >
            <Item handleToggle={handleToggle} value={value} labelId={labelId} checked={checked} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default ItemList;