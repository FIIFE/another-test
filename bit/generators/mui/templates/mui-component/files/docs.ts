import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.docs.mdx`,
    content: `---
description: Sample description of a ${Name} component that should be replaced
---

import { ${Name} } from './${name}';

### Usage

\`\`\`js live
<${Name} />
\`\`\`
`,
  };
};
