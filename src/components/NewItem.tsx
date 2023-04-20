import { FormHelperText, InputAdornment, useFormControl, Input, Button, DialogTitle, DialogContent, DialogActions, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemForm, ItemType } from "../Types";
import { camelCaseTrim } from "../helpers/Helpers";

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

  const handleAddItem = (newItem: ItemForm): void => {
    if (newItem.name && items.findIndex((item: ItemType) => item.name === camelCaseTrim(newItem.name)) === -1) {
      const fullItem = {
        name: camelCaseTrim(newItem.name),
        quantity: 1,
        priceCents: (newItem.price) ? Number.parseFloat(newItem.price) * 100 : 0,
        hasTax: true,
        notes: newItem.notes ?? '',
        checked: false
      }
      setItems((prev: ItemType[] = []) => [...prev, fullItem]);
      handleDialogClose();
    }
  }

  const handleAddItems = (items: string): void => {
    const itemsArr = items.split(/(,(\n|\s)*)|(^(\s+)\w)|\n+/g);
    const filteredArr: string[] = [];
    for (let item of itemsArr) {
      if (!((/^\W+$/).test(item) || filteredArr.includes(item))) {
        filteredArr.push(item);
      }
    }
    filteredArr.forEach((item: string) => handleAddItem({name: item}));
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
      {addType === 'single' ? <Button
        autoFocus
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          handleAddItem(newItem);
        }}
      >
        Add
      </Button>
      : <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          handleAddItems(newItems);
        }}
      >
        Add All
      </Button>}
    </DialogActions>
    </>
  );
}

export default NewItem;
