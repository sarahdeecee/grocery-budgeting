import { FormHelperText, InputAdornment, useFormControl, Input, Button, DialogTitle, DialogContent, DialogActions, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemForm, ItemType } from "../Types";

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
  const [newItems, setNewItems] = useState<string>('');
  const [addType, setAddType] = useState<String>('single');

  const handleAddItem = (item: ItemForm): void => {
    const fullItem = {
      name: item.name,
      quantity: 1,
      priceCents: (item.price) ? Number.parseFloat(item.price) * 100 : 0,
      hasTax: true,
      notes: item.notes
    }
    setItems((prev: ItemType[] = []) => [...prev, fullItem]);
    handleDialogClose();
  }

  const handleAddItems = (items: string): void => {
    const itemsArr = items.split(/[,\n]/g);
    itemsArr.filter(item => item !== '').forEach(item => handleAddItem({name: item}));
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

  const singleAdd = <Stack component="form" noValidate autoComplete="off" spacing={3}>
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
      inputProps={{ inputMode: 'decimal' }}
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

  const multiAdd = <Stack component="form" noValidate autoComplete="off" spacing={3}>
    <Input
      value={newItems}
      multiline
      rows={10}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItems(e.target.value)
      }}
      placeholder="Paste item names separated by new lines or commas"
    />
  </Stack>;

  return (<>
    <DialogTitle id="alert-dialog-title" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      {"Add an item"}{addTypeToggle}
    </DialogTitle>
    <DialogContent>
      {addType === 'single' ? singleAdd : multiAdd}
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
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          handleAddItems(newItems);
        }}
      >
        Add Multiple
      </Button>
    </DialogActions>
    </>
  );
}

export default NewItem;
