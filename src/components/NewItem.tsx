import { FormHelperText, InputAdornment, useFormControl, Input, Button, DialogTitle, DialogContent, DialogActions, Stack, ToggleButtonGroup, ToggleButton, InputLabel, NativeSelect, Grid, FormControl, Autocomplete, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { CommonItem, ItemForm, ItemType } from "../Types";
import { camelCaseTrim, sortAZ } from "../helpers/Helpers";
import { categoriesAll, commonItems } from "../data/Categories";
import AutoCompleteName from "./AutoCompleteName";

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
    notes: '',
    tax: '13',
    category: 'Other',
    quantity: '1'
  });
  const [newItems, setNewItems] = useState<string>('');
  const [addType, setAddType] = useState<String>('single');

  
  const categoryOptions = [...categoriesAll].map(category => <option key={category} value={category}>{category}</option>)

  const handleAddItem = (newItem: ItemForm): void => {
    if (newItem.name && items.findIndex((item: ItemType) => item.name === camelCaseTrim(newItem.name)) === -1) {
      const fullItem = {
        name: camelCaseTrim(newItem.name),
        quantity: Number.parseInt(newItem.quantity) ?? 1,
        priceCents: (newItem.price) ? Number.parseFloat(newItem.price) * 100 : 0,
        tax: Number.parseInt(newItem.tax),
        notes: newItem.notes ?? '',
        category: newItem.category ?? 'Other',
        checked: false
      }
      setItems((prev: ItemType[] = []) => [...prev, fullItem].sort((a, b) => sortAZ(a, b)));
      handleDialogClose();
    }
  }

  const handleAddItems = (items: string): void => {
    const itemsArr = items.split(/(,(\n|\s)*)|(^(\s+)\w)|\n+/g);
    const filteredArr: string[] = [];
    for (let item of itemsArr) {
      if (!((/^\W+$/).test(item) || filteredArr.includes(item) || !item)) {
        filteredArr.push(item);
      }
    }
    filteredArr.forEach((item: string) => {
      if (commonItems.some(commonItem => commonItem.name.toLowerCase() === item.toLowerCase())) {
        const foundItem = commonItems.find(commonItem => commonItem.name.toLowerCase() === item.toLowerCase());
        const category = (foundItem && typeof foundItem.category === 'string') ? foundItem.category : 'Other';
        handleAddItem({name: item, tax: '13', quantity: '1', category: category});
      } else {
        handleAddItem({name: item, tax: '13', quantity: '1', category: 'Other'});
      }
    });
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

  const singleAdd = <Stack component="form" noValidate autoComplete="on" spacing={3}>
    <AutoCompleteName newItem={newItem} setNewItem={setNewItem} />
    {/* <FormControl variant="standard"> */}
      {/* <InputLabel variant="standard" shrink htmlFor="name-box">
        Item:
      </InputLabel>
      <Input
        value={newItem.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewItem({...newItem, name: e.target.value})
        }}
        inputProps={{
          id: 'name-box',
          type: 'search'
        }}
      /> */}
    {/* </FormControl> */}
    <FormControl variant="standard">
      <InputLabel variant="standard" shrink htmlFor="notes-box">
          Notes:
        </InputLabel>
      <Input
      value={newItem.notes}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem({...newItem, notes: e.target.value})
      }}
      inputProps={{
        id: 'notes-box',
      }}
    />
    </FormControl>
    <Grid container>
      <Grid item xs={8}>
        <FormControl variant="standard">
        <InputLabel variant="standard" shrink htmlFor="price-box">
          Price:
        </InputLabel>
        <Input
          value={newItem.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, price: e.target.value})
          }}
          inputProps={{ inputMode: 'decimal', id: 'price-box' }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        </FormControl>
      </Grid>
      <Grid item xs={4} sx={{flexDirection: 'row'}}>
        <FormControl variant="standard">
          <InputLabel variant="standard" shrink htmlFor="item-tax-box">
            Tax: 
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: 'tax-box',
              id: 'item-tax-box',
            }}
            value={newItem.tax}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setNewItem({...newItem, tax: e.target.value})
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
      <Grid item xs={8} sx={{flexDirection: 'row'}}>
        <InputLabel variant="standard" shrink htmlFor="item-category-box">
          Category
        </InputLabel>
          <NativeSelect
            inputProps={{
              name: 'category-box',
              id: 'item-category-box',
            }}
            value={newItem.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setNewItem({...newItem, category: e.target.value})
            }}
          >
            {categoryOptions}
          </NativeSelect>
      </Grid>
      <Grid item xs={4} sx={{flexDirection: 'row'}}>
        <InputLabel variant="standard" shrink htmlFor="item-quantity-box">
          Quantity
        </InputLabel>
        <NativeSelect
            inputProps={{
              name: 'quantity-box',
              id: 'item-quantity-box',
            }}
            value={newItem.quantity}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setNewItem({...newItem, quantity: e.target.value})
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n}</option>)}
          </NativeSelect>
      </Grid>
    </Grid>
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
      {addType === 'single' ? "Add an item" : "Add items"}{addTypeToggle}
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
