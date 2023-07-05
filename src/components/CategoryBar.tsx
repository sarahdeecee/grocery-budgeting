import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, ListItemButton, ListItemText } from "@mui/material";
import { categoriesAllEmoji } from "../data/Categories";

function CategoryBar(props: any) {
  const {category, open, handleCategory, emoji} = props;
  
  return (
    <Box
      sx={{
        bgcolor: '#EFE7BC'
      }}>
      <ListItemButton
        onClick={() => handleCategory(category)}
        sx={{
          height: '2rem'
        }}
      >
        <ListItemText
          className="category-bar-text"
          primary={`${emoji} ${category}`}
          primaryTypographyProps={{
            fontSize: 'medium',
            fontWeight: 'normal',
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