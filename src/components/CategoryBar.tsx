import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, ListItemButton, ListItemText } from "@mui/material";

function CategoryBar(props: any) {
  const {category, open, handleCategory} = props;
  
  return (
    <Box
      sx={{
        bgcolor: '#FFA384'
      }}>
      <ListItemButton
        onClick={() => handleCategory(category)}
        sx={{
          height: '2rem'
        }}
      >
        <ListItemText
          primary={category}
          primaryTypographyProps={{
            fontSize: 'medium',
            fontWeight: 'bold',
            color: 'white'
          }}
        />
        {open && 
          <KeyboardArrowUp
          />
        }
        {!open && 
          <KeyboardArrowDown />}
      </ListItemButton>
    </Box>
  );
}

export default CategoryBar;