import { ComponentContext, ComponentTemplate } from '@teambit/generator';
import { compositionFile } from './files/composition';
import { docsFile } from './files/docs';
import { indexFile } from './files/index-file';
import { themeFile } from './files/theme';

export const muiTheme: ComponentTemplate = {
  name: 'mui-theme',
  description: 'a mui theme extension',
  generateFiles: (context: ComponentContext) => {
    return [
      indexFile(context),
      themeFile(context),
      compositionFile(context),
      docsFile(context),
    ];
  },
  config: {
    'fifi.bit/envs/mui-theme': {},
    'teambit.envs/envs': {
      env: 'fifi.bit/envs/mui-theme',
    },
  },
};
