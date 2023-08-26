import { NextjsSite, StackContext } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

export default function FrontendStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'NextJsSite', {
    path: 'packages/frontend',
    customDomain: {
      domainName:
        stack.stage === 'prod' ? 'sourcier.uk' : `${stack.stage}.sourcier.uk`,
      isExternalDomain: true,
      cdk: {
        certificate: Certificate.fromCertificateArn(
          stack,
          'd8f786c1-c7a4-4191-9e79-a5654cc45365',
          'arn:aws:acm:us-east-1:561381207426:certificate/d8f786c1-c7a4-4191-9e79-a5654cc45365'
        ),
      },
    },
  });

  stack.addOutputs({
    SiteUrl: site.url || 'http://localhost:3000',
  });
}
