import { ComponentContext } from '@teambit/generator';

export const indexFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: 'index.ts',
    content: `export { ${Name}, ${Name}Props } from './${name}';
`,
  };
};
