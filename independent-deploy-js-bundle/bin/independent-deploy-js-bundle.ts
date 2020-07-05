#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { IndependentDeployJsBundleStack } from '../lib/independent-deploy-js-bundle-stack';

const app = new cdk.App();
new IndependentDeployJsBundleStack(app, 'IndependentDeployJsBundleStack');
