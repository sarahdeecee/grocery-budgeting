import { Box, Divider, FormControl, FormHelperText, InputAdornment, List, ListItem, useFormControl, Input, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, ButtonGroup } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemForm, ItemType, blankItem, formatPrice } from "../Types";

function EditItem(props: any) {
  const {handleDialogClose, items, setItems, editItem, setSelectedItem, handleDialogOpen} = props;
  const [editItemForm, setEditItemForm] = useState<ItemForm>({
    name: items[editItem].name ?? '',
    price: formatPrice(items[editItem].priceCents).replace('$','') ?? '',
    notes: items[editItem].notes ?? ''
  });

  const handleItemEdit = (index: number): void => {
    const fullItem = {
      name: editItemForm.name,
      quantity: 1,
      priceCents: editItemForm.price ? Number.parseFloat(editItemForm.price) * 100 : 0,
      hasTax: true,
      notes: editItemForm.notes
    }
    const newItems = [...items];
    newItems[index] = fullItem;
    setItems(newItems);
    handleDialogClose();
  }

  const handleDialogConfirmDelete = (selectedItem: ItemType): void => {
    setSelectedItem(selectedItem);
    handleDialogOpen('delete')
  };

  return (<>
    <DialogTitle id="alert-dialog-title">
      {"Edit item"}
    </DialogTitle>
    <DialogContent>
      <Stack component="form" noValidate autoComplete="off" spacing={3}>
        <Input
          value={editItemForm.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEditItemForm({...editItemForm, name: e.target.value})
          }}
          placeholder="Item name"
        />
        <Input
          value={editItemForm.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEditItemForm({...editItemForm, price: e.target.value})
          }}
          inputProps={{ inputMode: 'decimal' }}
          placeholder="Price"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <Input
          value={editItemForm.notes}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEditItemForm({...editItemForm, notes: e.target.value})
          }}
          placeholder="Notes"
        />
      </Stack>
    </DialogContent>
    <DialogActions sx={{justifyContent: 'space-between'}}>
      <ButtonGroup>
        <Button onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          handleDialogConfirmDelete(items[editItem])}
        }>Delete</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button
          autoFocus
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            handleItemEdit(editItem);
          }}
        >
          Save
        </Button>
      </ButtonGroup>
    </DialogActions>
    </>
  );
}

export default EditItem;
