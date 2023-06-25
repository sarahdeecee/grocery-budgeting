import { FormHelperText, InputAdornment, useFormControl, Input, Button, DialogTitle, DialogContent, DialogActions, Stack, ToggleButtonGroup, ToggleButton, InputLabel, NativeSelect, Grid, FormControl, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemForm, ItemType } from "../Types";
import { camelCaseTrim, isPriceEmpty, isPriceInvalid } from "../helpers/Helpers";
import { categoriesAll, commonItems } from "../data/Categories";
import SingleAdd from "../components/SingleAdd";
import MultiAdd from "../components/MultiAdd";
import PriceSwitch from "../components/PriceSwitch";

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
    quantity: '1',
  });
  const [newItems, setNewItems] = useState<string>('');
  const [addType, setAddType] = useState<String>('single');
  const [priceByWeight, setPriceByWeight] = useState<boolean>(true);
  const [errors, setErrors] = useState({
    name: false,
    // price: false,
    // notes: false,
    // tax: false,
    // category: false,
    // quantity: false,
  })
  
  const categoryOptions = [...categoriesAll].map(category => <option key={category} value={category}>{category}</option>);

  const handleAddItem = (newItem: ItemForm): void => {
    if (newItem.name === '') {
      setErrors({...errors, name: true})
    } else {
      if (!isPriceInvalid(newItem.price) || isPriceEmpty(newItem.price)) {
        if (newItem.name && items.findIndex((item: ItemType) => item.name === camelCaseTrim(newItem.name)) === -1) {
          const fullItem = {
            name: camelCaseTrim(newItem.name),
            quantity: Number.parseInt(newItem.quantity) ?? 1,
            priceCents: (newItem.price) ? Number.parseFloat(newItem.price) * 100 : 0,
            tax: Number.parseInt(newItem.tax),
            notes: newItem.notes ?? '',
            category: newItem.category ?? 'Other',
            checked: false,
          }
          setItems((prev: ItemType[] = []) => [...prev, fullItem]);
          handleDialogClose();
        }
      }
    }
  }

  const handleAddItems = (newItems: string): void => {
    const itemsArr = newItems.split(/(,(\n|\s)*)|(^(\s+)\w)|\n+/g);
    const filteredArr: string[] = [];
    for (let item of itemsArr) {
      if (!((/^\W+$/).test(item) || filteredArr.includes(item) || !item)) {
        filteredArr.push(item);
      }
    }
    filteredArr.forEach((item: string) => {
      const price = '';
      const notes = '';
      if (commonItems.some(commonItem => commonItem.name.toLowerCase() === item.toLowerCase())) {
        const foundItem = commonItems.find(commonItem => commonItem.name.toLowerCase() === item.toLowerCase());
        const category = (foundItem && typeof foundItem.category === 'string') ? foundItem.category : 'Other';
        handleAddItem({name: item, tax: '13', quantity: '1', price, notes, category: category});
      } else {
        handleAddItem({name: item, tax: '13', quantity: '1', price, notes, category: 'Other'});
      }
    });
  }

  const handleToggleChange = (e: React.MouseEvent<HTMLElement>, type: string): void => {
    setAddType(type);
  }

  const handlePriceSwitch = (e: React.MouseEvent<HTMLElement>, type: string): void => {
    priceByWeight ? setPriceByWeight(false) : setPriceByWeight(true);
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

  const singleAdd = <SingleAdd newItem={newItem} setNewItem={setNewItem} errors={errors} setErrors={setErrors} categoryOptions={categoryOptions} />
  const multiAdd = <MultiAdd newItems={newItems} setNewItems={setNewItems} />

  const singleAddButton = <Button
    autoFocus
    onClick={(e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      handleAddItem(newItem);
    }}
  >
    Add
  </Button>

  const multiAddButton = <Button
    onClick={(e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      handleAddItems(newItems);
    }}
  >
    Add All
  </Button>

  return (<>
    <DialogTitle id="alert-dialog-title" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      {addType === 'single' ? "Add an item" : "Add items"}{addTypeToggle}
    </DialogTitle>
    <DialogContent>
      {addType === 'single' ? singleAdd : multiAdd}
    </DialogContent>
    <DialogActions>
      <PriceSwitch handlePriceSwitch={handlePriceSwitch} />
      <Button onClick={handleDialogClose}>Cancel</Button>
      {addType === 'single' ? singleAddButton : multiAddButton}
    </DialogActions>
    </>
  );
}

export default NewItem;
