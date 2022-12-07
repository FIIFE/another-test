import { ComponentContext } from '@teambit/generator';

export const testFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.test.tsx`,
    content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${Name} } from './${name}.composition';

it('should render correctly', () => {
  render(<Basic${Name} />);
});
`,
  };
};