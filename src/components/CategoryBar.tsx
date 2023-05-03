import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

function CategoryBar(props: any) {
  const {category} = props;
  const [categoryOpen, setCategoryOpen] = useState<boolean>(true);
  console.log('open? ',categoryOpen);
  return (
    <Box
      sx={{
        bgcolor: 'green'
      }}>
      <ListItemButton
        onClick={() => setCategoryOpen(!categoryOpen)}
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
        {categoryOpen && 
          <KeyboardArrowUp
            sx={{
              // mr: -1,
            }}
          />
        }
        {!categoryOpen && 
          <KeyboardArrowDown />}
      </ListItemButton>
    </Box>
  );
}

export default CategoryBar;