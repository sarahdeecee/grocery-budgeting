import { Box, FormControl, FormHelperText, Grid, List, OutlinedInput, useFormControl } from "@mui/material";
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
    <List sx={{ width: '100%', maxWidth: '500px', bgcolor: 'background.paper' }}>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: '100%' }}>
          <Grid container spacing={2} sx={{m: 0, p: 0}}>
            <Grid item xs={8}>
              <OutlinedInput placeholder="Item name" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={4}>
              <OutlinedInput placeholder="Price" sx={{ width: '100%' }} />
            </Grid>
            {/* <MyFormHelperText /> */}
          </Grid>
        </FormControl>
      </Box>
    </List>
  );
}

export default NewItem;
