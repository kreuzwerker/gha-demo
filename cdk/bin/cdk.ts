#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { OidcStack } from '../lib/cdk-stack';

const app = new cdk.App();
new OidcStack(app, 'CdkStack', {
  stackName: "GH-OIDC-Stack",
  env: {
    region: 'eu-west-1',
  }
});

