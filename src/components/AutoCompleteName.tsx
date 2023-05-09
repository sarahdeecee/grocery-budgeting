import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { commonItems } from '../data/Categories';
import { CommonItem } from '../Types';

const filter = createFilterOptions<CommonItem>();

export default function AutoCompleteName(props: any) {
  const {newItem, setNewItem} = props;

  return (
    <Autocomplete
      value={newItem.name}
      onChange={(e: React.SyntheticEvent, newValue) => {
        if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setNewItem({...newItem, name: newValue.inputValue, category: 'Other'});
        } else if (newValue === null) {
          // Clear form if null
          setNewItem({...newItem, name: '', category: 'Other'});
        } else if (typeof newValue.category === 'string') {
          // Add category if common item
          setNewItem({...newItem, name: newValue.name, category: newValue.category});
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            name: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="item-name-box"
      options={commonItems}
      groupBy={(option) => option.category ? option.category : 'Other'}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Item" variant="standard" autoFocus />
      )}
    />
  );
}