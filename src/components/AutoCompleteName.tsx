import { useState } from "react";
import { CommonItem } from "../Types";
import { Autocomplete, Input, createFilterOptions } from "@mui/material";
import { commonItems } from "../data/Categories";

const filter = createFilterOptions<CommonItem>();

function AutoCompleteName(props: any) {
  const [value, setValue] = useState<CommonItem | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          const foundCategoryItem = commonItems.find(item => item.name === newValue);
          const autoCategory = foundCategoryItem ? foundCategoryItem.category : 'Other';
          setValue({
            name: newValue, category: autoCategory
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue, category: 'Other'
          });
        } else {
          setValue(newValue);
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
            category: 'Other'
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={commonItems}
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
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <Input {...params} />
      )}
    />
  );
}

export default AutoCompleteName;