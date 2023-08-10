import { NextjsSite, StackContext } from 'sst/constructs';

export function FrontendStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'NextJsSite', {
    path: 'packages/frontend',
  });

  stack.addOutputs({
    SiteUrl: site.url || 'http://localhost:3000',
  });
}
