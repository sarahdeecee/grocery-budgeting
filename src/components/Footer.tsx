import styled from "@emotion/styled";
import { Add, AddBox, AddCircle, Menu } from "@mui/icons-material";
import { AppBar, Fab, IconButton, Toolbar, Typography } from "@mui/material";
import { ItemType } from "../Types";

const StyledFab = styled(Fab)({
  // position: 'absolute',
  zIndex: 1,
  color: '#FFFFFF',
  // top: -30,
  // left: 0,
  // right: 0,
  // margin: '0 auto',
});

function Footer(props: any) {
  const {items, handleDialogOpen} = props;
  const subtotal = Array.isArray(items) ? items.reduce((sum: number, item: ItemType) => sum + (item.priceCents * item.quantity), 0) : 0;
  const taxtotal = Math.round(subtotal * 0.13);
  const total = subtotal + taxtotal;

  const formatPrice = (price: number): string => {
    if (price % 100 === 0) {
      return `$${price/100}.00`;
    } else if (price % 10 === 0) {
      return `$${price/100}0`
    } else {
      return `$${price/100}`
    }
  }

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography
            width="fit-content"
            variant="h6"
            >{`Total: ${formatPrice(total)}`} <Typography component="span" variant="body2">{`(${formatPrice(subtotal)} + ${formatPrice(taxtotal)})`}</Typography>
          </Typography>
          {/* <IconButton color="inherit" aria-label="open drawer">
            <Menu />
          </IconButton> */}
          {/* <StyledFab aria-label="add"> */}
            <AddBox fontSize="large" onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              handleDialogOpen('add');
            }} />
          {/* </StyledFab> */}
          {/* <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton> */}
        </Toolbar>
      </AppBar>
  );
}

export default Footer;
