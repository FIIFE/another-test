import { Components } from '@mui/material/styles/components';
import { typography } from '@fifi/ui-library.themes.typography';

export const MuiInputBase: Components['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      ...typography['DM Serif H5'],
    },
  },
};
