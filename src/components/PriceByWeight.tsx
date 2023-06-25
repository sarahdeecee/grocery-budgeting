import { Grid, Input, InputAdornment, InputLabel, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { isPriceInvalid } from "../helpers/Helpers";
import { useState } from "react";
import { Label } from "@mui/icons-material";

function PriceByWeight(props: any) {
  const {newItem, setNewItem} = props;
  const [unit, setUnit] = useState<'g'|'kg'|'lb'>('g');
  const [pricePer, setPricePer] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const price = newItem.price;

  const handleUnit = (e: React.MouseEvent<HTMLElement>, newUnit: 'g' | 'kg' | 'lb') => {
    if (newUnit !== null) {
      setUnit(newUnit);
    }
  };

  const unitToggle = <ToggleButtonGroup
    value={unit}
    exclusive
    onChange={handleUnit}
    aria-label="weight unit"
    sx={{height: '1rem'}}
    id="item-weight-toggle"
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

  return (<>
    <Grid container>
      <Grid item xs={6} sm={6}>
        {/* price per unit */}
        <TextField
          value={pricePer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPricePer(e.target.value);
          }}
          InputProps={{
            inputMode: 'decimal',
            id: 'price-per-unit-box',
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            endAdornment: <InputAdornment position="end">{`/${unit}`}</InputAdornment>,
            inputProps: {style: {maxWidth: '10ch'}}
          }}
          variant="standard"
          label={`Price per ${unit}`}
          helperText={isPriceInvalid(pricePer) ? `Please enter a valid price per ${unit}.` : null}
          error={isPriceInvalid(pricePer)}
        />
      </Grid>
      <Grid item xs={6} sm={6} sx={{flexDirection: 'row'}}>
        {/* weight */}
        <TextField
          InputProps={{
            name: 'weight-box',
            id: 'item-weight-box',
            inputMode: 'numeric',
            endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
          }}
          value={newItem.quantity}
          variant="standard"
          type='number'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewItem({...newItem, quantity: e.target.value})
          }}
          label="Weight"
        />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6}>
        {/* unit */}
        <InputLabel variant="standard" shrink htmlFor="item-weight-toggle">
          Unit of weight:
        </InputLabel>
        {unitToggle}
      </Grid>
      <Grid item xs={6}>
        {/* price */}
      <TextField
        value={newItem.price * newItem.quantity}
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
      </Grid>
    </Grid>
  </>)
};

export default PriceByWeight;