import { Input, Stack } from "@mui/material";

function MultiAdd(props: any) {
  const {newItems, setNewItems} = props;

  return (
    <Stack component="form" noValidate autoComplete="off" spacing={3}>
      <Input
        value={newItems}
        multiline
        rows={10}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewItems(e.target.value)
        }}
        placeholder="Paste item names separated by new lines or commas"
      />
    </Stack>
  )
}

export default MultiAdd;