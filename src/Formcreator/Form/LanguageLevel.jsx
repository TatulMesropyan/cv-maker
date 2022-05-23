import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {    
  1: 'Elementary Level Proficiency',
  2: 'Limited Working Proficiency',
  3: ' Professional Working Proficiency',
  4: ' Full Professional Proficiency',
  5: 'Native Bilingual Proficiency',
};

 const  LanguageLevel = ({getData}) => {
  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
export default LanguageLevel;