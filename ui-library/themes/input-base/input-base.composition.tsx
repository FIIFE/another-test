import '@fifi/ui-library.themes.typography/dist/styles.css';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import React from 'react';
import { MuiInputBase } from './input-base';

const theme = createTheme({
  components: {
    MuiInputBase,
  },
});

export const BaseInputBase = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        p={4}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 230px)',
          gap: 2,
        }}
      >
        <InputBase placeholder="Placeholder text" />
      </Box>
    </ThemeProvider>
  );
};
