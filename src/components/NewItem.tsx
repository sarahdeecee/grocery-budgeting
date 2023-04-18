import { Box, Divider, FormControl, FormHelperText, InputAdornment, List, ListItem, useFormControl, Input, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import { ItemType, blankItem } from "../Types";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

function NewItem(props: any) {
  const {items, setItems, handleDialogClose} = props;
  const [newItem, setNewItem] = useState<ItemType>(blankItem);

  const handleAddItem = (item: ItemType) => {
    setItems((prev: ItemType[]) => [...prev, item]);
  }

  return (<>
    <DialogTitle id="alert-dialog-title">
      {"Add an item"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <Stack component="form" noValidate autoComplete="off" spacing={3}>
          <Input placeholder="Item name"/>
          {/* <Divider sx={{ m: 0.5 }} orientation="horizontal" /> */}
          <Input
            placeholder="Price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          <Input
            placeholder="Notes"
            />
          {/* <MyFormHelperText /> */}
        </Stack>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleDialogClose}>Cancel</Button>
      <Button
        autoFocus
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          // handleItemDelete(selectedItem)
        }}
      >
        Add
      </Button>
    </DialogActions>
    </>
  );
}

export default NewItem;
