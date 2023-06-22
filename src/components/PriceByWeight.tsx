import { Grid, Input, InputAdornment, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { isPriceInvalid } from "../helpers/Helpers";
import { useState } from "react";

function PriceByWeight(props: any) {
  const {newItem, setNewItem} = props;
  const [unit, setUnit] = useState<'g'|'kg'|'lb'>('g');

  const handleUnit = (e: React.MouseEvent<HTMLElement>, newUnit: 'g' | 'kg' | 'lb') => {
    setUnit(newUnit);
  };

  const unitToggle = <ToggleButtonGroup
    value={unit}
    exclusive
    onChange={handleUnit}
    aria-label="weight unit"
  >
    <ToggleButton className="unit-button" value="g" aria-label="left aligned">
      g
    </ToggleButton>
    <ToggleButton className="unit-button" value="kg" aria-label="centered">
      kg
    </ToggleButton>
    <ToggleButton className="unit-button" value="lb" aria-label="right aligned">
      lb
    </ToggleButton>
  </ToggleButtonGroup>

  return (
    <Grid container>
      <Grid item xs={6} sm={6}>
        {/* price */}
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
        {/* quantity */}
        <Input
          inputProps={{
            name: 'weight-box',
            id: 'item-weight-box',
            inputMode: 'numeric',
            min: 0, max: 100,
            // style: {width: '10ch'},
          }}
          endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
          value={newItem.quantity}
          type='number'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, quantity: e.target.value})
          }}
        // label="Weight"
        />
      </Grid>
      {unitToggle}
    </Grid>
  )
};

export default PriceByWeight;