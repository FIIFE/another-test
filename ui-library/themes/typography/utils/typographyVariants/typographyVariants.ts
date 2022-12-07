import { TypographyOptions } from '@mui/material/styles/createTypography';

const getDMSerifStyles = (
  fontSize: string,
  lineHeight: string,
  letterSpacing: string
): React.CSSProperties => ({
  fontFamily: 'DM Serif Text',
  fontWeight: '400',
  fontSize,
  lineHeight,
  letterSpacing,
});

export const typographyVariants: TypographyOptions = {
  'DM Serif H1': getDMSerifStyles('70px', '80px', '-0.5px'),
  'DM Serif H2': getDMSerifStyles('48px', '58px', '0px'),
  'DM Serif H3': getDMSerifStyles('30px', '36px', '0.25px'),
  'DM Serif H4': getDMSerifStyles('26px', '32px', '0.25px'),
  'DM Serif H5': getDMSerifStyles('22px', '28px', '0.25px'),
};
