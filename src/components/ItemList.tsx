import { IconButton, List, ListItem } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { useState } from "react";
import Item from "./Item";

function ItemList(props: any) {
  const [checked, setChecked] = useState([0]);
  const {items} = props;

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

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value: any) => {
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