import { MainRuntime } from '@teambit/cli';
import { GeneratorAspect, GeneratorMain } from '@teambit/generator';
import { MuiAspect } from './mui.aspect';
import { componentTemplates } from './mui.templates';

export class MuiMain {
  static slots = [];
  static dependencies = [GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {
    generator.registerComponentTemplate(componentTemplates);

    return new MuiMain();
  }
}

MuiAspect.addRuntime(MuiMain);
