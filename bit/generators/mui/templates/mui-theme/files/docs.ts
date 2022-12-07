import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.docs.mdx`,
    content: `---
description: Sample description of a ${name} theme that should be replaced
---

import { FigmaEmbed } from '@teambit/design.embeds.figma';

### Usage

\`\`\`
const theme = createTheme({
  Mui${Name},
});

export const MyApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <${Name} />
    </ThemeProvider>
  );
};
\`\`\`

### Designs

<FigmaEmbed src="https://www.figma.com/embed?embed_host=share&url=<FIGMA_LINK>" />
`,
  };
};
