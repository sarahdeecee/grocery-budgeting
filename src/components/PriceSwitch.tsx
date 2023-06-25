import { FormControlLabel, Switch } from "@mui/material";

function PriceSwitch(props: any) {
  const {handlePriceSwitch} = props;

  return (
    <FormControlLabel
      value="start"
      control={<Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />}
      label="Price by Weight"
      labelPlacement="end"
      onChange={handlePriceSwitch}
    />
  )
}

export default PriceSwitch;