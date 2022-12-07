import { TypographyOptions } from '@mui/material/styles/createTypography';
import { ComponentsProps } from '@mui/material/styles/props';
import { defaultVariantMapping } from './utils/defaultVariantMapping';
import { typographyVariants } from './utils/typographyVariants';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'DM Serif H1': React.CSSProperties;
    'DM Serif H2': React.CSSProperties;
    'DM Serif H3': React.CSSProperties;
    'DM Serif H4': React.CSSProperties;
    'DM Serif H5': React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    'DM Serif H1'?: React.CSSProperties;
    'DM Serif H2'?: React.CSSProperties;
    'DM Serif H3'?: React.CSSProperties;
    'DM Serif H4'?: React.CSSProperties;
    'DM Serif H5'?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    'DM Serif H1': true;
    'DM Serif H2': true;
    'DM Serif H3': true;
    'DM Serif H4': true;
    'DM Serif H5': true;
  }
}

export const typography: TypographyOptions = typographyVariants;

export const MuiTypography: {
  defaultProps?: ComponentsProps['MuiTypography'];
} = {
  defaultProps: {
    variant: 'DM Serif H1',
    variantMapping: defaultVariantMapping,
  },
};
