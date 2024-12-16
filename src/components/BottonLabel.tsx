'use client'
import React, { useState } from 'react';
import { ToggleButtonGroup, Box, Typography } from '@mui/material';
import { StyledToggleButton } from '@/components/StyledToggleButton';

interface Props
{
  title: string
  values: string[];
}

const BottonLabel: React.FC<Props> = (props) =>
{

  const [alignment, setAlignment] = useState<string | null>('left');
  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => { if (newAlignment !== null) setAlignment(newAlignment) };

  const item = (val: any) => <StyledToggleButton key={val} value={val} aria-label={val}>{val}</StyledToggleButton>

  return (
    <Box sx={{display:'flex',flexDirection:'column',mb:2}}>
      <Typography variant='h5' sx={{mt:'auto',mr:2, alignItems:'center'}}>{props.title}</Typography>
      <ToggleButtonGroup value={alignment} {...props} exclusive onChange={handleAlignment} aria-label="Toggle">
        {props.values.map(item)}
      </ToggleButtonGroup>
    </Box>
  );
};
export default BottonLabel;