import { ComponentContext } from '@teambit/generator';

export const themeFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.tsx`,
    content: `import { Components } from '@mui/material/styles/components';

export const Mui${Name}: Components['Mui${Name}'] = {
  defaultProps: {},
  styleOverrides: {},
};
`,
  };
};
