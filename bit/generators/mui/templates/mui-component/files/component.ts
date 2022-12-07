import { ComponentContext } from '@teambit/generator';

export const componentFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;
  return {
    relativePath: `${name}.tsx`,
    content: `import React from 'react';
import Box from '@mui/material/Box';
import { rootStyles } from './${name}.styles';

export interface ${Name}Props {
  /**
   * sample prop description that should be adjusted or removed (it shows up in bit UI's Overview tab)
   * */
  sampleProp?: string;
}

export const ${Name} = ({ sampleProp = '${Name} component' }: ${Name}Props) => {
  return (
    <Box sx={rootStyles}>{sampleProp}</Box>
  );
}
`,
  };
};
