import { Box, Divider, FormControl, FormHelperText, InputAdornment, List, ListItem, useFormControl, Input, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, ButtonGroup, InputLabel, Grid, NativeSelect } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemForm, ItemType, blankItem, formatPrice } from "../Types";
import { camelCaseTrim } from "../helpers/Helpers";

function EditItem(props: any) {
  const {handleDialogClose, items, setItems, editItem, setSelectedItem, handleDialogOpen, handleDelete} = props;
  const [editItemForm, setEditItemForm] = useState<ItemForm>({
    name: items[editItem].name ?? '',
    price: formatPrice(items[editItem].priceCents).replace('$','') ?? '',
    notes: items[editItem].notes ?? '',
    tax: items[editItem].tax ?? '13'
  });

  const handleItemEdit = (index: number): void => {
    const duplicateIndex = items.findIndex((item: ItemType) => (item.name).toLowerCase() === (editItemForm.name).toLowerCase());
    if (duplicateIndex === -1 || duplicateIndex === index) {
      const fullItem = {...items[index], 
        name: editItemForm.name,
        priceCents: editItemForm.price ? Number.parseFloat(editItemForm.price) * 100 : 0,
        notes: editItemForm.notes,
        tax: Number.parseInt(editItemForm.tax)
      }
      const newItems = [...items];
      newItems[index] = fullItem;
      setItems(newItems);
      handleDialogClose();
    }
  }

  return (<>
    <DialogTitle id="alert-dialog-title">
      {"Edit item"}
    </DialogTitle>
    <DialogContent>
      <Stack component="form" noValidate autoComplete="off" spacing={3}>
        <FormControl variant="standard">
          <InputLabel variant="standard" shrink htmlFor="name-box">
            Item:
          </InputLabel>
          <Input
            value={editItemForm.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditItemForm({...editItemForm, name: e.target.value})
            }}
            inputProps={{ id: 'name-box' }}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel variant="standard" shrink htmlFor="notes-box">
            Notes:
          </InputLabel>
          <Input
            value={editItemForm.notes}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditItemForm({...editItemForm, notes: e.target.value})
            }}
            inputProps={{ id: 'notes-box' }}
          />
        </FormControl>
        <Grid container>
          <Grid item xs={6}>
            <FormControl variant="standard">
            <InputLabel variant="standard" shrink htmlFor="price-box">
              Price:
            </InputLabel>
              <Input
                value={editItemForm.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEditItemForm({...editItemForm, price: e.target.value})
                }}
                inputProps={{ inputMode: 'decimal', id: 'price-box' }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{flexDirection: 'row'}}>
          <FormControl variant="standard">
            <InputLabel variant="standard" shrink htmlFor="item-tax-box">
              Tax: 
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: 'tax-box',
                id: 'item-tax-box',
              }}
              value={editItemForm.tax}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setEditItemForm({...editItemForm, tax: e.target.value})
              }}
            >
              <option value='0'>None</option>
              <option value='5'>5%</option>
              <option value='13'>13%</option>
            </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    </DialogContent>
    <DialogActions sx={{justifyContent: 'space-between'}}>
      <ButtonGroup>
        <Button onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          handleDelete(items[editItem])}
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
