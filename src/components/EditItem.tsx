import { FormControl, InputAdornment, Input, Button, DialogTitle, DialogContent, DialogActions, Stack, ButtonGroup, InputLabel, Grid, NativeSelect, TextField } from "@mui/material";
import { useState } from "react";
import { ItemForm, ItemType } from "../Types";
import { formatPrice, isPriceInvalid } from "../helpers/Helpers";
import { categoriesAll } from "../data/Categories";

function EditItem(props: any) {
  const {handleDialogClose, items, setItems, editItem, handleDelete} = props;
  const itemPrice = items[editItem].priceCents === 0 ? '' : formatPrice(items[editItem].priceCents).replace('$','');
  const [editItemForm, setEditItemForm] = useState<ItemForm>({
    name: items[editItem].name ?? '',
    price: itemPrice ?? '',
    notes: items[editItem].notes ?? '',
    tax: items[editItem].tax ?? '13',
    quantity: items[editItem].quantity ?? '1',
    category: items[editItem].category ?? 'Other',
  });
  const [errors, setErrors] = useState({
    name: false, 
    helperText: ''
  })

  const handleItemEdit = (index: number): void => {
    const duplicateIndex = items.findIndex((item: ItemType) => (item.name).toLowerCase() === (editItemForm.name).toLowerCase());
    // If name is blank, 
    if (editItemForm.name === '') {
      setErrors({...errors, name: true, helperText: 'Item name is required.'});
    } else if (duplicateIndex !== index && duplicateIndex > -1) {
      // If item exists in list (but different index value)
      setErrors({...errors, name: true, helperText: 'Item already exists in list.'});
    } else {
      if (!isPriceInvalid(editItemForm.price)) {
        const fullItem = {...items[index], 
          name: editItemForm.name,
          priceCents: editItemForm.price ? Number.parseFloat(editItemForm.price) * 100 : 0,
          notes: editItemForm.notes,
          tax: Number.parseInt(editItemForm.tax),
          quantity: Number.parseInt(editItemForm.quantity),
          category: editItemForm.category,
        }
        const newItems = [...items];
        newItems[index] = fullItem;
        setItems(newItems);
        handleDialogClose();
      }
    }
  }

  return (<>
    <DialogTitle id="alert-dialog-title">
      {"Edit item"}
    </DialogTitle>
    <DialogContent>
      <Stack component="form" noValidate autoComplete="off" spacing={3}>
        <FormControl variant="standard">
          <TextField
            value={editItemForm.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setErrors({...errors, name: false});
              setEditItemForm({...editItemForm, name: e.target.value})
            }}
            inputProps={{ id: 'name-box' }}
            variant="standard"
            label="Item"
            error={errors.name}
            helperText={errors.name ? errors.helperText : ''}
          />
        </FormControl>
        <FormControl variant="standard">
          <TextField
            value={editItemForm.notes}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditItemForm({...editItemForm, notes: e.target.value})
            }}
            inputProps={{ id: 'notes-box' }}
            variant="standard"
            label="Notes"
          />
        </FormControl>
        <Grid container>
          <Grid item xs={8}>
            <FormControl variant="standard">
              <TextField
                value={editItemForm.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEditItemForm({...editItemForm, price: e.target.value})
                }}
                InputProps={{
                  inputMode: 'decimal',
                  id: 'price-box',
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="standard"
                label="Price:"
                helperText={isPriceInvalid(editItemForm.price) ? "Please enter a valid price." : null}
                error={isPriceInvalid(editItemForm.price)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4} sx={{flexDirection: 'row'}}>
          <FormControl variant="standard" sx={{width: '7ch'}}>
            <InputLabel variant="standard" shrink htmlFor="item-tax-box">
              Tax
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
              <option value={0}>None</option>
              <option value={5}>5%</option>
              <option value={13}>13%</option>
            </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <FormControl variant="standard">
            <InputLabel variant="standard" shrink htmlFor="category-box">
              Category
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: 'category-box',
                id: 'item-category-box',
              }}
              value={editItemForm.category}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setEditItemForm({...editItemForm, category: e.target.value})
              }}
            >
              {Array.isArray(categoriesAll) && categoriesAll.map(category => <option key={category} value={category}>{category}</option>)}
            </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={4} sx={{flexDirection: 'row'}}>
            <FormControl variant="standard" sx={{width: '7ch'}}>
              <InputLabel variant="standard" shrink htmlFor="item-quantity-box">
                Quantity
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: 'quantity-box',
                  id: 'item-quantity-box',
                }}
                value={editItemForm.quantity}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setEditItemForm({...editItemForm, quantity: e.target.value})
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n}</option>)}
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
