import { Box, Divider, FormControl, FormHelperText, InputAdornment, List, ListItem, useFormControl, Input, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
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
  const [addType, setAddType] = useState<String>('single');

  const handleAddItem = (item: ItemForm) => {
    const fullItem = {
      name: item.name,
      quantity: 1,
      priceCents: Number.parseFloat(item.price) * 100,
      hasTax: true,
      notes: item.notes
    }
    setItems((prev: ItemType[] = []) => [...prev, fullItem]);
    handleDialogClose();
  }

  const handleToggleChange = (e: React.MouseEvent<HTMLElement>, type: string): void => {
    setAddType(type);
  }

  const addTypeToggle = <ToggleButtonGroup
    color="primary"
    value={addType}
    exclusive
    onChange={handleToggleChange}
    aria-label="Platform"
    size="small"
  >
    <ToggleButton value="multi">Multiple</ToggleButton>
    <ToggleButton value="single">Single</ToggleButton>
  </ToggleButtonGroup>

  return (<>
    <DialogTitle id="alert-dialog-title" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      {"Add an item"}{addTypeToggle}
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
            // const priceRegex = /\d+.\d\d/
            // if (priceRegex.test(e.target.value)) {
              setNewItem({...newItem, price: e.target.value})
            // }
          }}
          // type="number"
          inputProps={{ inputMode: 'decimal' }}
          placeholder="Price"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        {/* <Input
          value={newItem.quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, quantity: e.target.value})
          }}
          placeholder="How many"
        /> */}
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
