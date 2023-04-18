import { Box, Divider, FormControl, FormHelperText, InputAdornment, List, ListItem, useFormControl, Input, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemForm, ItemType, blankItem, formatPrice } from "../Types";

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

function EditItem(props: any) {
  const {handleDialogClose, items, setItems, editItem, setEditItem} = props;
  const [editItemForm, setEditItemForm] = useState<ItemForm>({
    name: items[editItem].name,
    price: formatPrice(items[editItem].priceCents).replace('$',''),
    notes: items[editItem].notes
  });

  console.log(editItem);

  const handleItemEdit = (index: number): void => {
    console.log('edit item')
    const fullItem = {
      name: editItemForm.name,
      quantity: 1,
      priceCents: Number.parseFloat(editItemForm.price) * 100,
      hasTax: true,
      notes: editItemForm.notes
    }
    const newItems = [...items];
    newItems[index] = fullItem;
    setItems(newItems);
    handleDialogClose();
  }

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
            const priceRegex = /\d+.\d\d/
            // const priceFormatted = e.target.value.replace(/(\d{2}$)(\.\d{2})/, "$1,");
            // if (priceRegex.test(e.target.value)) {
              setEditItemForm({...editItemForm, price: e.target.value})
            // }
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
        <MyFormHelperText />
      </Stack>
    </DialogContent>
    <DialogActions>
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
    </DialogActions>
    </>
  );
}

export default EditItem;
