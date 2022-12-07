import { ComponentContext } from '@teambit/generator';

export const compositionFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.composition.tsx`,
    content: `import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import React from 'react';
import { Mui${Name} } from './${name}';

const theme = createTheme({
  components: {
    Mui${Name},
  },
});

export const Base${Name} = () => {
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
        
      </Box>
    </ThemeProvider>
  );
};
`,
  };
};
