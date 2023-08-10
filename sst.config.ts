import { SSTConfig } from 'sst';
import { FrontendStack } from '@sourcier/stacks/FrontendStack';

export default {
  config(_input) {
    return {
      name: 'friendly-broccoli',
      region: 'eu-west-2',
    };
  },
  stacks(app) {
    app.stack(FrontendStack);
  },
} satisfies SSTConfig;
