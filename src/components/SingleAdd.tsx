import { FormControl, Grid, InputAdornment, InputLabel, NativeSelect, Stack, TextField } from "@mui/material"
import AutoCompleteName from "./AutoCompleteName"
import { isPriceInvalid } from "../helpers/Helpers";
import PriceByWeight from "./PriceByWeight";

function SingleAdd(props: any) {
  const {newItem, setNewItem, errors, setErrors, categoryOptions} = props;

  return (
    <Stack component="form" noValidate autoComplete="on" spacing={3}>
      <AutoCompleteName newItem={newItem} setNewItem={setNewItem} errors={errors} setErrors={setErrors} />
      <TextField
        value={newItem.notes}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewItem({...newItem, notes: e.target.value})
        }}
        inputProps={{
          id: 'notes-box',
        }}
        variant="standard"
        label="Notes"
      />
      <Grid container>
        {/* category */}
        <Grid item xs={8} sm={6}>
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
        <Grid item xs={4} sm={6} sx={{flexDirection: 'row'}}>
          {/* tax */}
          <InputLabel variant="standard" shrink htmlFor="item-tax-box">
            Tax
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
        </Grid>
      </Grid>
      <PriceByWeight newItem={newItem} setNewItem={setNewItem} />
      {/* <Grid container>
        <Grid item xs={6} sm={6}>
          // price
          <TextField
            value={newItem.price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewItem({...newItem, price: e.target.value})
            }}
            InputProps={{
              inputMode: 'decimal',
              id: 'price-box',
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              inputProps: {style: {maxWidth: '10ch'}}
            }}
            variant="standard"
            label="Price"
            helperText={isPriceInvalid(newItem.price) ? "Please enter a valid price." : null}
            error={isPriceInvalid(newItem.price)}
          />
        </Grid>
        <Grid item xs={6} sm={6} sx={{flexDirection: 'row'}}>
          // quantity 
          <TextField
            inputProps={{
              name: 'quantity-box',
              id: 'item-quantity-box',
              inputMode: 'numeric',
              min: 0, max: 100,
              style: {width: '10ch'}
            }}
            value={newItem.quantity}
            type='number'
            variant='standard'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewItem({...newItem, quantity: e.target.value})
            }}
          label="Quantity"
          />
        </Grid>
      </Grid> */}
    </Stack>
  )
}

export default SingleAdd;