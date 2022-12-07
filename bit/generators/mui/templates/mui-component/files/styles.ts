import { ComponentContext } from '@teambit/generator';

export const stylesFile = (context: ComponentContext) => {
  const { name } = context;
  return {
    relativePath: `${name}.styles.ts`,
    content: `export const rootStyles = {
      
}
`,
  };
};
