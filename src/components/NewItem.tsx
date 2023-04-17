import { AddAPhotoRounded, AddCircle, Delete } from "@mui/icons-material";
import { Box, Divider, FormControl, FormHelperText, Grid, IconButton, InputBase, List, ListItem, OutlinedInput, useFormControl } from "@mui/material";
import { useMemo, useState } from "react";

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

type Item = {
  name: string
  priceCents: number
  tax?: number
}

function NewItem() {
  const [item, setItem] = useState<Item>({
    name: '',
    priceCents: 0
  })

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      <ListItem secondaryAction={
        <IconButton edge="end" aria-label="add">
          <AddCircle fontSize="large" />
        </IconButton>
      }
      sx={{width: '100%'}}
      >
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <InputBase placeholder="Item name" sx={{ ml: 1, flex: 1, width: '50ch' }} />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase placeholder="Price" sx={{ ml: 1}} />
        {/* <MyFormHelperText /> */}
        </FormControl>
      </Box>
      </ListItem>
    </List>
  );
}

export default NewItem;
