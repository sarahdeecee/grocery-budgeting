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

  // {
  //   name: 'Cookies',
  //   quantity: 1,
  //   priceCents: 500,
  //   hasTax: true
  // },

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {items.map((item: any) => {
        const {name} = item;
        const labelId = `checkbox-list-label-${name}`;

        return (
          <ListItem
            key={name}
            secondaryAction={
              <IconButton edge="end" aria-label="edit">
                <Edit />
              </IconButton>
            }
            disablePadding
          >
            <Item handleToggle={handleToggle} item={item} labelId={labelId} checked={checked} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default ItemList;