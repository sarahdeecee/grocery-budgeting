import { AddAPhotoRounded, AddCircle, Delete } from "@mui/icons-material";
import { Box, Divider, FormControl, FormHelperText, Grid, IconButton, InputAdornment, List, ListItem, OutlinedInput, useFormControl, Input, Button } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemType } from "../Types";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

function NewItem(props: any) {
  const {items, setItems} = props;
  const [newItem, setNewItem] = useState<ItemType>({
    name: '',
    quantity: 1,
    priceCents: 0,
    hasTax: true
  })

  const handleAddItem = (item: ItemType) => {
    setItems((prev: ItemType[]) => [...prev, item]);
  }

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      <ListItem secondaryAction={
        <Button>Add</Button>
      }
      sx={{width: '100%'}}
      >
      <Box component="form" noValidate autoComplete="off" sx={{width: '100%'}}>
        <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <Input placeholder="Item name" sx={{ml: 1, width: '75%'}} />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Input
            placeholder="Price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            sx={{ml: 1, width: '20%', flexGrow: 1}}
          />
        {/* <MyFormHelperText /> */}
        </FormControl>
      </Box>
      </ListItem>
    </List>
  );
}

export default NewItem;
