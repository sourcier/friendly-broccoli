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
          '91918ff7-9013-45ad-8a7b-30f3dd928efe',
          'arn:aws:acm:eu-west-2:561381207426:certificate/91918ff7-9013-45ad-8a7b-30f3dd928efe'
        ),
      },
    },
  });

  stack.addOutputs({
    SiteUrl: site.url || 'http://localhost:3000',
  });
}
