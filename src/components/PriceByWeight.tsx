import { Grid, Input, InputAdornment, InputLabel, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { isPriceInvalid } from "../helpers/Helpers";
import { useState } from "react";
import { Label } from "@mui/icons-material";

function PriceByWeight(props: any) {
  const {newItem, setNewItem} = props;
  const [unit, setUnit] = useState<'g'|'kg'|'lb'>('g');
  const [pricePer, setPricePer] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const priceHelperText = isPriceInvalid(newItem.price) ? "Please enter a valid price."
    : isPriceInvalid(pricePer) ? `Please enter a valid price per ${unit}.`
    : isPriceInvalid(weight) ? "Please enter a valid weight value."
    : null

  const isPriceBoxesEmpty = pricePer === ('') || weight === ('');
  const isPriceBoxesZero = pricePer === ('0') || weight === ('0');

  const isPriceValid = !isPriceInvalid(pricePer) && !isPriceInvalid(weight);
  
  // const price = (isPriceValid && !isPriceBoxesEmpty && !isPriceBoxesZero) ? setNewItem({...newItem, price: Number.parseInt(pricePer) * Number.parseInt(weight)})
    // : '';
  
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
            const priceIsNaN = Number.isNaN(Number.parseFloat(e.target.value) * Number.parseFloat(weight));

            setPricePer(e.target.value);
            if (priceIsNaN || isPriceInvalid(e.target.value)) {
              setNewItem({...newItem, price: ''});
            } else {
              setNewItem({...newItem, price: (Number.parseFloat(e.target.value) * Number.parseFloat(weight)).toString()});
            }
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
          value={weight}
          variant="standard"
          type='number'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const priceIsNaN = Number.isNaN(Number.parseFloat(pricePer) * Number.parseFloat(e.target.value));

            setWeight(e.target.value);
            if (priceIsNaN || isPriceInvalid(e.target.value)) {
              setNewItem({...newItem, price: ''});
            } else {
              setNewItem({...newItem, price: (Number.parseFloat(pricePer) * Number.parseFloat(e.target.value)).toString()});
            }
          }}
          label="Weight"
          helperText={isPriceInvalid(weight) ? `Please enter a valid weight.` : null}
          error={isPriceInvalid(weight)}
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
        value={newItem.price}
        InputProps={{
          inputMode: 'decimal',
          id: 'price-box',
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          readOnly: true
        }}
        variant="filled"
        label="Price"
        size="small"
      />
      </Grid>
    </Grid>
  </>)
};

export default PriceByWeight;