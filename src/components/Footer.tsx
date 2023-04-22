import { AddBox } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { ItemType } from "../Types";

function Footer(props: any) {
  const {items, handleDialogOpen} = props;
  const subtotal = Array.isArray(items) ? items.reduce((sum: number, item: ItemType) => sum + (item.priceCents * item.quantity), 0) : 0;
  const taxtotal = Array.isArray(items) ? Math.round(items.reduce((sum: number, item: ItemType) => sum + (item.priceCents * (item.tax / 100) * item.quantity), 0)) : 0;
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
    <AppBar id="footer" position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, width: '100vw', height: '56px', maxWidth: '800px'}}>
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
