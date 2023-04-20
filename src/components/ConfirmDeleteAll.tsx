import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

function ConfirmDeleteAll(props: any) {
  const {handleDialogClose, setItems} = props;

  const handleItemDelete = (): void => {
    setItems([]);
    handleDialogClose();
  }

  return (<>
    <DialogTitle id="alert-dialog-title">
      {'Remove items?'}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Are you sure you want to remove all items? This cannot be undone.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleDialogClose}>Cancel</Button>
      <Button
        autoFocus
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          handleItemDelete()}}
      >
        Confirm All
      </Button>
    </DialogActions>
    </>
  );
}

export default ConfirmDeleteAll;
