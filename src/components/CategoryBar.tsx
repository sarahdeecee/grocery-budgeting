import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

function CategoryBar(props: any) {
  const {category, open, handleCategory} = props;
  
  return (
    <Box
      sx={{
        bgcolor: '#81c784'
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
            // mb: '2px',
            color: 'white'
          }}
        />
        {open && 
          <KeyboardArrowUp
            sx={{
              // mr: -1,
            }}
          />
        }
        {!open && 
          <KeyboardArrowDown />}
      </ListItemButton>
    </Box>
  );
}

export default CategoryBar;