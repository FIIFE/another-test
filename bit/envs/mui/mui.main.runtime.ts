import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { MuiAspect } from './mui.aspect';

export class MuiMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const MuiEnv = react.compose([
      react.overrideDependencies({
        peerDependencies: {
          '@emotion/react': {
            version: '^11.0.0',
            resolveFromEnv: true,
          },
          '@emotion/styled': {
            version: '^11.0.0',
            resolveFromEnv: true,
          },
          '@mui/material': {
            version: '^5.0.0',
            resolveFromEnv: true,
          },
        },
      }),
    ]);
    envs.registerEnv(MuiEnv);
    return new MuiMain();
  }
}

MuiAspect.addRuntime(MuiMain);
