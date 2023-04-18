import { Box, Divider, FormControl, FormHelperText, InputAdornment, List, ListItem, useFormControl, Input, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemForm, ItemType, blankItem } from "../Types";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return '';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

function NewItem(props: any) {
  const {items, setItems, handleDialogClose} = props;
  const [newItem, setNewItem] = useState<ItemForm>({
    name: '',
    price: '',
    notes: ''
  });

  const handleAddItem = (item: ItemForm) => {
    console.log('add');
    const fullItem = {
      name: item.name,
      quantity: 1,
      priceCents: Number.parseFloat(item.price) * 100,
      hasTax: true,
      notes: item.notes
    }
    setItems((prev: ItemType[]) => [...prev, fullItem]);
    handleDialogClose();
  }

  return (<>
    <DialogTitle id="alert-dialog-title">
      {"Add an item"}
    </DialogTitle>
    <DialogContent>
      <Stack component="form" noValidate autoComplete="off" spacing={3}>
        <Input
          value={newItem.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, name: e.target.value})
          }}
          placeholder="Item name"
        />
        <Input
          value={newItem.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, price: e.target.value})
          }}
          placeholder="Price"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <Input
          value={newItem.notes}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, notes: e.target.value})
          }}
          placeholder="Notes"
        />
        <MyFormHelperText />
      </Stack>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleDialogClose}>Cancel</Button>
      <Button
        autoFocus
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          handleAddItem(newItem);
        }}
      >
        Add
      </Button>
    </DialogActions>
    </>
  );
}

export default NewItem;
