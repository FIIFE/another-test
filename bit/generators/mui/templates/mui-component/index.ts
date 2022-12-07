import { ComponentContext, ComponentTemplate } from '@teambit/generator';
import { componentFile } from './files/component';
import { compositionFile } from './files/composition';
import { docsFile } from './files/docs';
import { indexFile } from './files/index-file';
import { stylesFile } from './files/styles';
import { testFile } from './files/test';

export const muiComponent: ComponentTemplate = {
  name: 'mui-component',
  description: 'a basic mui component',
  generateFiles: (context: ComponentContext) => {
    return [
      indexFile(context),
      componentFile(context),
      stylesFile(context),
      compositionFile(context),
      docsFile(context),
      testFile(context),
    ];
  },
  config: {
    'fifi.bit/envs/mui': {},
    'teambit.envs/envs': {
      env: 'fifi.bit/envs/mui',
    },
  },
};
