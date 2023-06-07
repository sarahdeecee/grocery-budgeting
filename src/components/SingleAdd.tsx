import { FormControl, Grid, InputAdornment, InputLabel, NativeSelect, Stack, TextField } from "@mui/material"
import AutoCompleteName from "./AutoCompleteName"
import { isPriceInvalid } from "../helpers/Helpers";

function SingleAdd(props: any) {
  const {newItem, setNewItem, errors, setErrors, categoryOptions} = props;

  return (
    <Stack component="form" noValidate autoComplete="on" spacing={3}>
      <AutoCompleteName newItem={newItem} setNewItem={setNewItem} errors={errors} setErrors={setErrors} />
      <FormControl variant="standard">
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
      </FormControl>
      <Grid container>
        <Grid item xs={8}>
          <FormControl variant="standard">
            <TextField
              value={newItem.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewItem({...newItem, price: e.target.value})
              }}
              InputProps={{
                inputMode: 'decimal',
                id: 'price-box',
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              variant="standard"
              label="Price"
              helperText={isPriceInvalid(newItem.price) ? "Please enter a valid price." : null}
              error={isPriceInvalid(newItem.price)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{flexDirection: 'row'}}>
          <FormControl variant="standard">
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
          <TextField
            inputProps={{
              name: 'quantity-box',
              id: 'item-quantity-box',
              inputMode: 'numeric',
              min: 0, max: 100
            }}
            value={newItem.quantity}
            type='number'
            variant='standard'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewItem({...newItem, quantity: e.target.value})
            }}
          />
        </Grid>
      </Grid>
      {/* <MyFormHelperText /> */}
    </Stack>
  )
}

export default SingleAdd;