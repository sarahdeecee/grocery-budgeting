import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ItemType } from "../Types";
import React from "react";

function ConfirmDelete(props: any) {
  const {handleDialogClose, items, setItems, selectedItem} = props;

  const handleItemDelete = (selectedItem: ItemType): void => {
    setItems((items: ItemType[]) => items.filter((item: ItemType) => item.name !== selectedItem.name));
    handleDialogClose();
  }

  return (<>
    <DialogTitle id="alert-dialog-title">
      {"Remove item?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Are you sure you want to remove this item?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleDialogClose}>Cancel</Button>
      <Button onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        handleItemDelete(selectedItem)}}
        autoFocus
      >
        Confirm
      </Button>
    </DialogActions>
    </>
  );
}

export default ConfirmDelete;
