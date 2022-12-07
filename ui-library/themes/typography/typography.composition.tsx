import Stack from '@mui/material/Stack';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Typography from '@mui/material/Typography';
import React from 'react';
import './styles.css';
import { MuiTypography, typography } from './typography';

const theme = createTheme({
  typography,
  components: {
    MuiTypography,
  },
});

export const DmSerif = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Typography variant="DM Serif H1">Headline 1</Typography>
        <Typography variant="DM Serif H2">Headline 2</Typography>
        <Typography variant="DM Serif H3">Headline 3</Typography>
        <Typography variant="DM Serif H4">Headline 4</Typography>
        <Typography variant="DM Serif H5">Headline 5</Typography>
      </Stack>
    </ThemeProvider>
  );
};
