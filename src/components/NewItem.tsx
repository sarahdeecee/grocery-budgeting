import { Box, Divider, FormControl, FormHelperText, InputAdornment, List, ListItem, useFormControl, Input, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemType, blankItem } from "../Types";

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
  const [newItem, setNewItem] = useState<ItemType>(blankItem);

  const handleAddItem = (item: ItemType) => {
    console.log('add');
    setItems((prev: ItemType[]) => [...prev, item]);
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
          value={newItem.priceCents}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, priceCents: Number.parseFloat(e.target.value)})
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
