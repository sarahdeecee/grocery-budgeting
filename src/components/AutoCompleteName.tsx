import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { commonItems } from '../data/Categories';
import { CommonItem } from '../Types';
import { camelCaseTrim } from '../helpers/Helpers';

const filter = createFilterOptions<CommonItem>();

export default function AutoCompleteName(props: any) {
  const {newItem, setNewItem} = props;

  return (
    <Autocomplete
      value={newItem.name}
      onInputChange={(e: React.SyntheticEvent, newValue) => {
        const isExisting = commonItems.some((option) => newValue.toLowerCase() === option.name.toLowerCase());
        if (newValue && !isExisting) {
          // Create a new value from the user input
          setNewItem({...newItem, name: newValue, category: 'Other'});
        } else if (newValue === null) {
          // Clear form if null
          setNewItem({...newItem, name: '', category: 'Other'});
        } else if (isExisting) {
          // Add category if common item
          const foundItem = commonItems.find((item: CommonItem) => item.name === newValue)
          const foundItemCategory = foundItem ? foundItem.category : 'Other';
          setNewItem({...newItem, name: newValue, category: foundItemCategory});
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue.toLowerCase() === option.name.toLowerCase());
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            name: `${camelCaseTrim(inputValue)}`,
          });
        }

        return filtered;
      }}
      // selectOnFocus
      handleHomeEndKeys
      id="item-name-box"
      options={commonItems}
      groupBy={(option) => option.category ? option.category : ''}
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
        <TextField {...params}
          label="Item"
          variant="standard"
          InputProps={{
            ...params.InputProps,
            // type: 'search',
          }}
        />
      )}
    />
  );
}